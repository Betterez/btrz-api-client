/* eslint-disable max-len */
const constants = require("../constants.js");

/**
 * Builds authorization and forwarding headers for API requests.
 * @param {Object} opts - Options for authorization
 * @param {string} [opts.token] - API key; sets x-api-key header when provided
 * @param {string} [opts.jwtToken] - JWT or internal auth symbol; sets Authorization Bearer when provided
 * @param {{ getToken: function(): string }} [opts.internalAuthTokenProvider] - When jwtToken is INTERNAL_AUTH_TOKEN_SYMBOL, getToken() is used for the Bearer token
 * @param {Object} [opts.headers] - Optional request headers; x-amzn-trace-id and x-elevation-token are forwarded when present; cookie with "btrz-trusted" is forwarded for trusted machine
 * @returns {Object} Headers object suitable for axios (x-api-key, Authorization, cookie, x-amzn-trace-id, x-elevation-token as applicable)
 */
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
