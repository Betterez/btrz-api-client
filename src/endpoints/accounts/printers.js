/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for printers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function printersFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /printers - list supported printers and their print templates. No query parameters accepted.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Unused; API accepts no query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printers: Array<object> }>>}
   *   Response printers array: each has id, name, itemTypes, templates (see GET /printers).
   * @throws {import("axios").AxiosError} 401 Unauthorized, 500 Internal server error
   */
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/printers",
      params: query || {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = printersFactory;
