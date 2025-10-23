"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

  if (headers && headers.cookie && headers.cookie.includes("btrz-trusted")) {
    _headers.cookie = headers.cookie;
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
      Object.entries(headers).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        if (_headers[key]) {
          return;
        }
        if (key === "x-amzn-trace-id" && value) {
          _headers[key] = headers[key];
        } else if (key === "x-elevation-token") {
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