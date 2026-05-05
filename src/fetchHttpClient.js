const {fetch: undiciFetch, Agent} = require("undici");

function isPlainObject(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  return Object.getPrototypeOf(value) === Object.prototype;
}

function isStream(value) {
  return value && typeof value.pipe === "function";
}

function isFormData(value) {
  return value && typeof value.getHeaders === "function";
}

function mergeHeaders(defaultHeaders, requestHeaders) {
  return {
    ...(defaultHeaders || {}),
    ...(requestHeaders || {})
  };
}

function serializeParams(params) {
  if (!params || typeof params !== "object") {
    return "";
  }

  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    const value = params[key];

    if (value === undefined || value === null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== undefined && item !== null) {
          searchParams.append(`${key}[]`, `${item}`);
        }
      });
      return;
    }

    searchParams.append(key, `${value}`);
  });

  return searchParams.toString();
}

function toURL(url, baseURL, params) {
  const normalizedURL = new URL(url, baseURL);
  const paramsString = serializeParams(params);
  if (paramsString) {
    normalizedURL.search = paramsString;
  }
  return normalizedURL.toString();
}

function headersToObject(headers) {
  const normalizedHeaders = {};

  if (!headers) {
    return normalizedHeaders;
  }

  if (typeof headers.forEach === "function") {
    headers.forEach((value, key) => {
      normalizedHeaders[key] = value;
    });
    return normalizedHeaders;
  }

  return {...headers};
}

function parseResponseBody(response, responseType) {
  if (responseType === "arraybuffer") {
    return response.arrayBuffer();
  }

  if (responseType === "blob") {
    return response.blob();
  }

  if (responseType === "text") {
    return response.text();
  }

  const contentType = response.headers.get("content-type") || "";
  const shouldParseJSON = responseType === "json" || contentType.includes("application/json") || contentType.includes("+json");

  if (response.status === 204 || response.status === 205) {
    return Promise.resolve("");
  }

  if (shouldParseJSON) {
    return response.text().then((text) => {
      if (!text) {
        return "";
      }
      try {
        return JSON.parse(text);
      } catch (error) {
        return text;
      }
    });
  }

  return response.text();
}

function createAxiosLikeError(message, {
  code,
  config,
  response,
  request,
  cause
}) {
  const error = new Error(message);

  error.name = "AxiosError";
  error.code = code;
  error.config = config;
  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  if (cause) {
    error.cause = cause;
  }

  error.toJSON = () => {
    return {
      message: error.message,
      name: error.name,
      code: error.code,
      config: error.config,
      status: error.response && error.response.status
    };
  };

  return error;
}

function defaultValidateStatus(status) {
  return status >= 200 && status < 300;
}

function createAgentDispatcher(agentLike) {
  if (!agentLike || typeof agentLike !== "object") {
    return null;
  }

  if (typeof agentLike.dispatch === "function") {
    return agentLike;
  }

  const options = {};

  if (typeof agentLike.maxSockets === "number" && Number.isFinite(agentLike.maxSockets) && agentLike.maxSockets > 0) {
    options.connections = agentLike.maxSockets;
  }

  return new Agent(options);
}

function createFetchHttpClient(options = {}) {
  const {
    baseURL = "",
    timeout = 0,
    headers = {},
    agents,
    fetchImpl
  } = options;

  const fetchFn = fetchImpl || undiciFetch;
  const dispatchers = {
    http: agents && createAgentDispatcher(agents.httpAgent),
    https: agents && createAgentDispatcher(agents.httpsAgent)
  };

  // eslint-disable-next-line max-statements
  async function request(configOrURL, maybeConfig = {}) {
    const config = typeof configOrURL === "string" ?
      {...maybeConfig, url: configOrURL} :
      {...configOrURL};

    const method = (config.method || "get").toUpperCase();
    const finalURL = toURL(config.url || "", config.baseURL || request.defaults.baseURL || "", config.params);
    const requestHeaders = mergeHeaders(request.defaults.headers, config.headers);

    const init = {
      method,
      headers: requestHeaders
    };

    const effectiveTimeout = config.timeout === undefined ? request.defaults.timeout : config.timeout;
    const controller = new AbortController();
    let timeoutId = null;
    let timeoutTriggered = false;

    if (effectiveTimeout > 0) {
      timeoutId = setTimeout(() => {
        timeoutTriggered = true;
        controller.abort();
      }, effectiveTimeout);
      init.signal = controller.signal;
    }

    const protocol = finalURL.startsWith("https:") ? "https" : "http";
    const dispatcher = protocol === "https" ? dispatchers.https : dispatchers.http;
    if (dispatcher) {
      init.dispatcher = dispatcher;
    }

    if (config.maxRedirects === 0) {
      init.redirect = "manual";
    }

    const hasBodyMethod = ["POST", "PUT", "PATCH", "DELETE"].includes(method);
    if (hasBodyMethod && config.data !== undefined) {
      if (isFormData(config.data)) {
        if (typeof config.data.getBuffer === "function") {
          init.body = config.data.getBuffer();
        } else {
          init.body = config.data;
          init.duplex = "half";
        }
      } else if (isStream(config.data)) {
        init.body = config.data;
        init.duplex = "half";
      } else if (isPlainObject(config.data) || Array.isArray(config.data)) {
        init.body = JSON.stringify(config.data);
        if (!requestHeaders["content-type"] && !requestHeaders["Content-Type"]) {
          init.headers = {
            ...init.headers,
            "content-type": "application/json"
          };
        }
      } else {
        init.body = config.data;
      }
    }

    const normalizedConfig = {
      ...config,
      method,
      headers: init.headers,
      timeout: effectiveTimeout,
      baseURL: config.baseURL || request.defaults.baseURL,
      url: config.url || ""
    };

    const requestInfo = {
      url: finalURL,
      method
    };

    let rawResponse = null;
    try {
      rawResponse = await fetchFn(finalURL, init);
    } catch (error) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (timeoutTriggered || (error && error.name === "AbortError")) {
        throw createAxiosLikeError(`timeout of ${effectiveTimeout}ms exceeded`, {
          code: "ECONNABORTED",
          config: normalizedConfig,
          request: requestInfo,
          cause: error
        });
      }

      throw createAxiosLikeError(error.message || "Network Error", {
        code: "ERR_NETWORK",
        config: normalizedConfig,
        request: requestInfo,
        cause: error
      });
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const parsedBody = await parseResponseBody(rawResponse, config.responseType);
    const axiosLikeResponse = {
      data: parsedBody,
      status: rawResponse.status,
      statusText: rawResponse.statusText,
      headers: headersToObject(rawResponse.headers),
      config: normalizedConfig,
      request: requestInfo
    };

    const validateStatus = typeof config.validateStatus === "function" ? config.validateStatus : defaultValidateStatus;
    const isValidStatus = validateStatus(rawResponse.status);

    if (!isValidStatus) {
      throw createAxiosLikeError(`Request failed with status code ${rawResponse.status}`, {
        code: rawResponse.status >= 500 ? "ERR_BAD_RESPONSE" : "ERR_BAD_REQUEST",
        config: normalizedConfig,
        request: requestInfo,
        response: axiosLikeResponse
      });
    }

    return axiosLikeResponse;
  }

  request.defaults = {
    baseURL,
    timeout,
    headers: {
      "Accept": "application/json",
      ...headers
    }
  };

  request.request = request;
  request.get = (url, config = {}) => {
    return request({...(config || {}), url, method: "get"});
  };
  request.delete = (url, config = {}) => {
    return request({...(config || {}), url, method: "delete"});
  };
  request.post = (url, data, config = {}) => {
    return request({...(config || {}), url, data, method: "post"});
  };
  request.put = (url, data, config = {}) => {
    return request({...(config || {}), url, data, method: "put"});
  };
  request.patch = (url, data, config = {}) => {
    return request({...(config || {}), url, data, method: "patch"});
  };

  return request;
}

module.exports = {
  createFetchHttpClient
};
