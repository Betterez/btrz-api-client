const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for ssrs endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventorySsrsQuery
 */

/**
 * Factory for ssrs API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function ssrsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /ssrs - list SSRs.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventorySsrsQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/ssrs", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = ssrsFactory;
