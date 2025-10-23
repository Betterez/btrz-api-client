const constants = require("../constants");

function authorizationHeaders({
  token, jwtToken, internalAuthTokenProvider, headers
}) {
  const _headers = {};

  if (token) {
    _headers["x-api-key"] = `${token}`;
  }

  if (headers && headers.cookie && headers.cookie.includes("btrz-trusted")) {
    _headers.cookie = headers.cookie;
  }

  if (jwtToken && jwtToken === constants.INTERNAL_AUTH_TOKEN_SYMBOL) {
    if (!internalAuthTokenProvider || typeof internalAuthTokenProvider.getToken !== "function") {
      throw new Error("Tried to make an internal API request, but no 'internalAuthTokenProvider' with a 'getToken' function " +
        "was supplied to the API client");
    }
    _headers.authorization = `Bearer ${internalAuthTokenProvider.getToken()}`;
  } else if (jwtToken) {
    _headers.authorization = `Bearer ${jwtToken}`;
  }

  try {
    if (headers && typeof headers === "object" && !Array.isArray(headers)) {
      Object.entries(headers).forEach(([key, value]) => {
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
  authorizationHeaders
};
