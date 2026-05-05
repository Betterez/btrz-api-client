"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = require("undici"),
    undiciFetch = _require.fetch,
    Agent = _require.Agent;

function isPlainObject(value) {
  if (!value || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") {
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
  return _extends({}, defaultHeaders || {}, requestHeaders || {});
}

function serializeParams(params) {
  if (!params || (typeof params === "undefined" ? "undefined" : _typeof(params)) !== "object") {
    return "";
  }

  var searchParams = new URLSearchParams();

  Object.keys(params).forEach(function (key) {
    var value = params[key];

    if (value === undefined || value === null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        if (item !== undefined && item !== null) {
          searchParams.append(key + "[]", "" + item);
        }
      });
      return;
    }

    searchParams.append(key, "" + value);
  });

  return searchParams.toString();
}

function toURL(url, baseURL, params) {
  var normalizedURL = new URL(url, baseURL);
  var paramsString = serializeParams(params);
  if (paramsString) {
    normalizedURL.search = paramsString;
  }
  return normalizedURL.toString();
}

function headersToObject(headers) {
  var normalizedHeaders = {};

  if (!headers) {
    return normalizedHeaders;
  }

  if (typeof headers.forEach === "function") {
    headers.forEach(function (value, key) {
      normalizedHeaders[key] = value;
    });
    return normalizedHeaders;
  }

  return _extends({}, headers);
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

  var contentType = response.headers.get("content-type") || "";
  var shouldParseJSON = responseType === "json" || contentType.includes("application/json") || contentType.includes("+json");

  if (response.status === 204 || response.status === 205) {
    return Promise.resolve("");
  }

  if (shouldParseJSON) {
    return response.text().then(function (text) {
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

function createAxiosLikeError(message, _ref) {
  var code = _ref.code,
      config = _ref.config,
      response = _ref.response,
      request = _ref.request,
      cause = _ref.cause;

  var error = new Error(message);

  error.name = "AxiosError";
  error.code = code;
  error.config = config;
  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  if (cause) {
    error.cause = cause;
  }

  error.toJSON = function () {
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
  if (!agentLike || (typeof agentLike === "undefined" ? "undefined" : _typeof(agentLike)) !== "object") {
    return null;
  }

  if (typeof agentLike.dispatch === "function") {
    return agentLike;
  }

  var options = {};

  if (typeof agentLike.maxSockets === "number" && Number.isFinite(agentLike.maxSockets) && agentLike.maxSockets > 0) {
    options.connections = agentLike.maxSockets;
  }

  return new Agent(options);
}

function createFetchHttpClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$baseURL = options.baseURL,
      baseURL = _options$baseURL === undefined ? "" : _options$baseURL,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 0 : _options$timeout,
      _options$headers = options.headers,
      headers = _options$headers === undefined ? {} : _options$headers,
      agents = options.agents,
      fetchImpl = options.fetchImpl;


  var fetchFn = fetchImpl || undiciFetch;
  var dispatchers = {
    http: agents && createAgentDispatcher(agents.httpAgent),
    https: agents && createAgentDispatcher(agents.httpsAgent)
  };

  // eslint-disable-next-line max-statements
  async function request(configOrURL) {
    var maybeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var config = typeof configOrURL === "string" ? _extends({}, maybeConfig, { url: configOrURL }) : _extends({}, configOrURL);

    var method = (config.method || "get").toUpperCase();
    var finalURL = toURL(config.url || "", config.baseURL || request.defaults.baseURL || "", config.params);
    var requestHeaders = mergeHeaders(request.defaults.headers, config.headers);

    var init = {
      method: method,
      headers: requestHeaders
    };

    var effectiveTimeout = config.timeout === undefined ? request.defaults.timeout : config.timeout;
    var controller = new AbortController();
    var timeoutId = null;
    var timeoutTriggered = false;

    if (effectiveTimeout > 0) {
      timeoutId = setTimeout(function () {
        timeoutTriggered = true;
        controller.abort();
      }, effectiveTimeout);
      init.signal = controller.signal;
    }

    var protocol = finalURL.startsWith("https:") ? "https" : "http";
    var dispatcher = protocol === "https" ? dispatchers.https : dispatchers.http;
    if (dispatcher) {
      init.dispatcher = dispatcher;
    }

    if (config.maxRedirects === 0) {
      init.redirect = "manual";
    }

    var hasBodyMethod = ["POST", "PUT", "PATCH", "DELETE"].includes(method);
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
          init.headers = _extends({}, init.headers, {
            "content-type": "application/json"
          });
        }
      } else {
        init.body = config.data;
      }
    }

    var normalizedConfig = _extends({}, config, {
      method: method,
      headers: init.headers,
      timeout: effectiveTimeout,
      baseURL: config.baseURL || request.defaults.baseURL,
      url: config.url || ""
    });

    var requestInfo = {
      url: finalURL,
      method: method
    };

    var rawResponse = null;
    try {
      rawResponse = await fetchFn(finalURL, init);
    } catch (error) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (timeoutTriggered || error && error.name === "AbortError") {
        throw createAxiosLikeError("timeout of " + effectiveTimeout + "ms exceeded", {
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

    var parsedBody = await parseResponseBody(rawResponse, config.responseType);
    var axiosLikeResponse = {
      data: parsedBody,
      status: rawResponse.status,
      statusText: rawResponse.statusText,
      headers: headersToObject(rawResponse.headers),
      config: normalizedConfig,
      request: requestInfo
    };

    var validateStatus = typeof config.validateStatus === "function" ? config.validateStatus : defaultValidateStatus;
    var isValidStatus = validateStatus(rawResponse.status);

    if (!isValidStatus) {
      throw createAxiosLikeError("Request failed with status code " + rawResponse.status, {
        code: rawResponse.status >= 500 ? "ERR_BAD_RESPONSE" : "ERR_BAD_REQUEST",
        config: normalizedConfig,
        request: requestInfo,
        response: axiosLikeResponse
      });
    }

    return axiosLikeResponse;
  }

  request.defaults = {
    baseURL: baseURL,
    timeout: timeout,
    headers: _extends({
      "Accept": "application/json"
    }, headers)
  };

  request.request = request;
  request.get = function (url) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return request(_extends({}, config || {}, { url: url, method: "get" }));
  };
  request.delete = function (url) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return request(_extends({}, config || {}, { url: url, method: "delete" }));
  };
  request.post = function (url, data) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return request(_extends({}, config || {}, { url: url, data: data, method: "post" }));
  };
  request.put = function (url, data) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return request(_extends({}, config || {}, { url: url, data: data, method: "put" }));
  };
  request.patch = function (url, data) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return request(_extends({}, config || {}, { url: url, data: data, method: "patch" }));
  };

  return request;
}

module.exports = {
  createFetchHttpClient: createFetchHttpClient
};