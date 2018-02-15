"use strict";

var constants = require("../constants");

function authorizationHeaders(_ref) {
  var token = _ref.token,
      jwtToken = _ref.jwtToken,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var headers = {};

  if (token) {
    headers['x-api-key'] = "" + token;
  }

  if (jwtToken && jwtToken === constants.INTERNAL_AUTH_TOKEN_SYMBOL) {
    if (!internalAuthTokenProvider || typeof internalAuthTokenProvider.getToken !== "function") {
      throw new Error("Tried to make an internal API request, but no 'internalAuthTokenProvider' with a 'getToken' function " + "was supplied to the API client");
    }
    headers['authorization'] = "Bearer " + internalAuthTokenProvider.getToken();
  } else if (jwtToken) {
    headers['authorization'] = "Bearer " + jwtToken;
  }

  return headers;
}

module.exports = {
  authorizationHeaders: authorizationHeaders
};