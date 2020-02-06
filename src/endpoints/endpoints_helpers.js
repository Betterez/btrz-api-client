const constants = require("../constants");

function authorizationHeaders({
  token, jwtToken, internalAuthTokenProvider
}) {
  const headers = {};

  if (token) {
    headers["x-api-key"] = `${token}`;
  }

  if (jwtToken && jwtToken === constants.INTERNAL_AUTH_TOKEN_SYMBOL) {
    if (!internalAuthTokenProvider || typeof internalAuthTokenProvider.getToken !== "function") {
      throw new Error("Tried to make an internal API request, but no 'internalAuthTokenProvider' with a 'getToken' function " +
        "was supplied to the API client");
    }
    headers.authorization = `Bearer ${internalAuthTokenProvider.getToken()}`;
  } else if (jwtToken) {
    headers.authorization = `Bearer ${jwtToken}`;
  }

  return headers;
}

module.exports = {
  authorizationHeaders
};
