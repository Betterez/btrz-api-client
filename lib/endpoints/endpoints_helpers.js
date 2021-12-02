"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var constants = require("../constants");

function authorizationHeaders(_ref) {
  var token = _ref.token,
      jwtToken = _ref.jwtToken,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider,
      headers = _ref.headers;

  var _headers = {};

  if (token) {
    _headers["x-api-key"] = "" + token;
  }

  if (jwtToken && jwtToken === constants.INTERNAL_AUTH_TOKEN_SYMBOL) {
    if (!internalAuthTokenProvider || typeof internalAuthTokenProvider.getToken !== "function") {
      throw new Error("Tried to make an internal API request, but no 'internalAuthTokenProvider' with a 'getToken' function " + "was supplied to the API client");
    }
    _headers.authorization = "Bearer " + internalAuthTokenProvider.getToken();
  } else if (jwtToken) {
    _headers.authorization = "Bearer " + jwtToken;
  }

  try {
    if (headers && (typeof headers === "undefined" ? "undefined" : _typeof(headers)) === "object" && !Array.isArray(headers)) {
      Object.keys(headers).forEach(function (key) {
        if (_headers[key]) {
          return;
        }
        if (key === "x-amzn-trace-id") {
          if (headers[key]) {
            _headers[key] = headers[key];
          }
        } else {
          _headers[key] = headers[key];
        }
      });
    }
  } catch (e) {
    console.log(e);
  }

  return _headers;
}

module.exports = {
  authorizationHeaders: authorizationHeaders
};