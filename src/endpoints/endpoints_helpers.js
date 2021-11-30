const constants = require("../constants");

function authorizationHeaders({
  token, jwtToken, internalAuthTokenProvider, headers
}) {
  const _headers = {};

  if (token) {
    _headers["x-api-key"] = `${token}`;
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
      Object.keys(headers).forEach((key) => {
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
  authorizationHeaders
};
