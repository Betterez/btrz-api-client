const fs = require("fs");
const path = require("path");
const nock = require("nock");
const requestParamsRegistry = new Map();

function isObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function toAxiosLikeHeaders(headers) {
  const normalizedHeaders = {...(headers || {})};

  if (normalizedHeaders.clientid && !normalizedHeaders.clientId) {
    normalizedHeaders.clientId = normalizedHeaders.clientid;
  }
  if (normalizedHeaders.accept && !normalizedHeaders.Accept) {
    normalizedHeaders.Accept = normalizedHeaders.accept;
  }
  if (normalizedHeaders.authorization && !normalizedHeaders.Authorization) {
    normalizedHeaders.Authorization = normalizedHeaders.authorization;
  }

  return normalizedHeaders;
}

function escapeRegex(input) {
  return input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizePathMatcher(pathMatcher) {
  if (typeof pathMatcher !== "string") {
    return pathMatcher;
  }

  const normalizedPath = pathMatcher.startsWith("/") ? pathMatcher : `/${pathMatcher}`;
  const endsWithQuery = normalizedPath.includes("?");
  const querySuffix = endsWithQuery ? "" : "(?:\\?.*)?";
  const matcherPattern = `${escapeRegex(normalizedPath)}${querySuffix}$`;
  return new RegExp(matcherPattern);
}

function getRequestRegistryKey(method, uri) {
  return `${method.toLowerCase()} ${uri}`;
}

function rememberRequestParams({method, uri, params}) {
  if (!params || typeof params !== "object") {
    return;
  }

  requestParamsRegistry.set(getRequestRegistryKey(method, uri), params);
}

function consumeRememberedRequestParams(method, uri) {
  const key = getRequestRegistryKey(method, uri);
  const params = requestParamsRegistry.get(key);
  if (params) {
    requestParamsRegistry.delete(key);
  }
  return params;
}

function parseQuery(uri) {
  const url = new URL(uri, "http://localhost");
  const query = {};
  url.searchParams.forEach((value, key) => {
    if (key.endsWith("[]")) {
      const normalizedKey = key.slice(0, -2);
      if (!query[normalizedKey]) {
        query[normalizedKey] = [];
      }
      query[normalizedKey].push(value);
      return;
    }

    if (Object.prototype.hasOwnProperty.call(query, key)) {
      if (!Array.isArray(query[key])) {
        query[key] = [query[key]];
      }
      query[key].push(value);
      return;
    }

    query[key] = value;
  });
  return query;
}

function normalizeData(data) {
  if (Buffer.isBuffer(data)) {
    return data.toString("utf8");
  }

  if (isObject(data) || Array.isArray(data)) {
    return JSON.stringify(data);
  }

  return data;
}

function resolveReply(replyArgs, config) {
  if (typeof replyArgs[0] === "function") {
    return replyArgs[0](config);
  }

  if (replyArgs.length === 0) {
    return [200];
  }

  if (replyArgs.length === 1) {
    return [replyArgs[0]];
  }

  return [replyArgs[0], replyArgs[1], replyArgs[2]];
}

function ensureRecordFile(filePath) {
  const directoryPath = path.dirname(filePath);
  fs.mkdirSync(directoryPath, {recursive: true});
  fs.writeFileSync(filePath, "");
}

function parseStackFilePath(line) {
  if (!line || line.includes("node_modules")) {
    return null;
  }

  const parenthesizedPath = line.match(/\((.+):\d+:\d+\)$/);
  if (parenthesizedPath && parenthesizedPath[1]) {
    return parenthesizedPath[1];
  }

  const plainPath = line.match(/at (.+):\d+:\d+$/);
  if (plainPath && plainPath[1]) {
    return plainPath[1];
  }

  return null;
}

function detectCallerTestFilePath() {
  const stack = new Error().stack || "";
  const lines = stack.split("\n");
  const thisFile = __filename;

  for (const line of lines) {
    const filePath = parseStackFilePath(line);
    if (filePath) {
      const normalizedPath = path.normalize(filePath);
      const isValidTestFile = normalizedPath !== thisFile &&
        normalizedPath.includes(`${path.sep}test${path.sep}`) &&
        !normalizedPath.endsWith(`${path.sep}test-helpers.js`) &&
        normalizedPath.endsWith(".js");

      if (isValidTestFile) {
        return normalizedPath;
      }
    }
  }

  return null;
}

function toSuiteRecordFilePath({testFilePath, projectRoot, artifactsRootPath}) {
  const testsRoot = path.join(projectRoot, "test");
  const relativeTestPath = path.relative(testsRoot, testFilePath);
  const baseName = relativeTestPath.replace(/\.js$/, "");
  return path.join(artifactsRootPath, `${baseName}.jsonl`);
}

function createNockAxiosMock({
  recordFilePath,
  artifactsRootPath = path.join(process.cwd(), "test", "artifacts"),
  clearRecordFile = true
} = {}) {
  const interceptors = [];
  const initializedRecordFiles = new Set();
  const projectRoot = process.cwd();

  if (recordFilePath && clearRecordFile) {
    ensureRecordFile(recordFilePath);
  }

  function enableInterception() {
    if (!nock.isActive()) {
      nock.activate();
    }
    nock.disableNetConnect();
    nock.enableNetConnect("127.0.0.1");
    nock.enableNetConnect("localhost");
  }

  enableInterception();

  function resolveRecordFilePath(suiteTestFilePath) {
    if (recordFilePath) {
      return recordFilePath;
    }

    if (!suiteTestFilePath) {
      return path.join(artifactsRootPath, "unknown-suite.jsonl");
    }

    return toSuiteRecordFilePath({
      testFilePath: suiteTestFilePath,
      projectRoot,
      artifactsRootPath
    });
  }

  function ensureRecordFileIsInitialized(filePath) {
    if (initializedRecordFiles.has(filePath)) {
      return;
    }

    const directoryPath = path.dirname(filePath);
    fs.mkdirSync(directoryPath, {recursive: true});
    if (clearRecordFile || !fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "");
    }
    initializedRecordFiles.add(filePath);
  }

  function writeRecord(entry, suiteTestFilePath) {
    const resolvedRecordFilePath = resolveRecordFilePath(suiteTestFilePath);
    ensureRecordFileIsInitialized(resolvedRecordFilePath);
    fs.appendFileSync(resolvedRecordFilePath, `${JSON.stringify(entry)}\n`);
  }

  function addInterceptor(method, pathMatcher, matcher) {
    const suiteTestFilePath = detectCallerTestFilePath();

    return {
      reply: (...replyArgs) => {
        enableInterception();
        const normalizedPathMatcher = normalizePathMatcher(pathMatcher);
        let interceptor = nock(/.*/)
          .intercept(normalizedPathMatcher, method.toUpperCase())
          .times(Number.MAX_SAFE_INTEGER);

        if (isObject(matcher) && matcher.params) {
          interceptor = interceptor.query(matcher.params);
        } else if (typeof pathMatcher === "string" && pathMatcher.includes("?")) {
          // Keep exact path+query matching when query is in the path matcher.
        } else {
          interceptor = interceptor.query(true);
        }

        if (matcher !== undefined && (!isObject(matcher) || !matcher.params)) {
          interceptor = nock(/.*/)
            .intercept(normalizedPathMatcher, method.toUpperCase(), matcher)
            .times(Number.MAX_SAFE_INTEGER);
          if (!(typeof pathMatcher === "string" && pathMatcher.includes("?"))) {
            interceptor = interceptor.query(true);
          }
        }

        const scope = interceptor.reply(function reply(uri, requestBody) {
          const [urlPathWithoutQuery] = uri.split("?");
          const rememberedParams = consumeRememberedRequestParams(method, uri);
          const params = rememberedParams || parseQuery(uri);
          const headers = toAxiosLikeHeaders(this.req && this.req.headers ? this.req.headers : {});
          const body = normalizeData(requestBody);
          const config = {
            headers,
            method: method.toLowerCase(),
            data: body,
            params,
            url: urlPathWithoutQuery
          };
          const replyResult = resolveReply(replyArgs, config) || [200];
          const statusCode = replyResult[0] || 200;
          const responseBody = replyResult[1];
          const responseHeaders = replyResult[2];

          writeRecord({
            timestamp: new Date().toISOString(),
            suiteTestFilePath,
            method: method.toLowerCase(),
            uri,
            headers,
            data: body,
            params,
            response: {
              statusCode,
              hasBody: responseBody !== undefined
            }
          }, suiteTestFilePath);

          return [statusCode, responseBody, responseHeaders];
        });

        interceptors.push(scope);
        return scope;
      }
    };
  }

  function reset() {
    nock.cleanAll();
    interceptors.length = 0;
  }

  function restore() {
    nock.cleanAll();
    nock.enableNetConnect();
    nock.restore();
    interceptors.length = 0;
  }

  return {
    onGet(pathMatcher, matcher) {
      return addInterceptor("get", pathMatcher, matcher);
    },
    onPost(pathMatcher, matcher) {
      return addInterceptor("post", pathMatcher, matcher);
    },
    onPut(pathMatcher, matcher) {
      return addInterceptor("put", pathMatcher, matcher);
    },
    onPatch(pathMatcher, matcher) {
      return addInterceptor("patch", pathMatcher, matcher);
    },
    onDelete(pathMatcher, matcher) {
      return addInterceptor("delete", pathMatcher, matcher);
    },
    reset,
    restore,
    getRecordFilePath(testFilePath) {
      const inputTestFilePath = testFilePath || detectCallerTestFilePath();
      return resolveRecordFilePath(inputTestFilePath);
    }
  };
}

module.exports = {
  createNockAxiosMock,
  rememberRequestParams
};
