const fs = require("fs");
const path = require("path");
const {MockAgent, setGlobalDispatcher, install} = require("undici");

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

function createUndiciFetchMock({
  recordFilePath,
  artifactsRootPath = path.join(process.cwd(), "test", "artifacts"),
  clearRecordFile = true
} = {}) {
  const initializedRecordFiles = new Set();
  const projectRoot = process.cwd();
  install();

  let mockAgent = null;

  if (recordFilePath && clearRecordFile) {
    ensureRecordFile(recordFilePath);
  }

  function activateMockAgent() {
    if (mockAgent) {
      return;
    }
    mockAgent = new MockAgent();
    mockAgent.disableNetConnect();
    setGlobalDispatcher(mockAgent);
  }

  activateMockAgent();

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

  function addInterceptor(method, pathMatcher) {
    const suiteTestFilePath = detectCallerTestFilePath();
    const normalizedPathMatcher = normalizePathMatcher(pathMatcher);

    return {
      reply: (...replyArgs) => {
        function registerReply() {
          activateMockAgent();
          const pool = mockAgent.get(/.*/);
          pool.intercept({
            path: normalizedPathMatcher,
            method: method.toUpperCase()
          }).reply((opts) => {
            registerReply();

            const [urlPathWithoutQuery] = opts.path.split("?");
            const params = parseQuery(opts.path);
            const headers = toAxiosLikeHeaders(opts.headers);
            const body = normalizeData(opts.body);
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
            const finalResponseHeaders = {
              ...(responseHeaders || {})
            };
            let finalResponseBody = responseBody;

            if (!finalResponseHeaders["content-type"] && !finalResponseHeaders["Content-Type"] && isObject(responseBody)) {
              finalResponseHeaders["content-type"] = "application/json";
              finalResponseBody = JSON.stringify(responseBody);
            }

            writeRecord({
              timestamp: new Date().toISOString(),
              suiteTestFilePath,
              method: method.toLowerCase(),
              uri: opts.path,
              headers,
              data: body,
              params,
              response: {
                statusCode,
                hasBody: responseBody !== undefined
              }
            }, suiteTestFilePath);

            return {
              statusCode,
              data: finalResponseBody,
              responseOptions: {
                headers: finalResponseHeaders
              }
            };
          });
        }

        registerReply();
      }
    };
  }

  function reset() {
    if (!mockAgent) {
      return;
    }
    mockAgent = null;
    activateMockAgent();
  }

  function restore() {
    if (mockAgent) {
      mockAgent.close();
    }
    mockAgent = null;
  }

  return {
    onGet(pathMatcher) {
      return addInterceptor("get", pathMatcher);
    },
    onPost(pathMatcher) {
      return addInterceptor("post", pathMatcher);
    },
    onPut(pathMatcher) {
      return addInterceptor("put", pathMatcher);
    },
    onPatch(pathMatcher) {
      return addInterceptor("patch", pathMatcher);
    },
    onDelete(pathMatcher) {
      return addInterceptor("delete", pathMatcher);
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
  createUndiciFetchMock
};
