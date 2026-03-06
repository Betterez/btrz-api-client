const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} StationsZonesQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for stations/zones API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function stationsZonesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /stations/zones - get station zones.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {StationsZonesQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, query = {}, headers}) {
    return client.get("/stations/zones", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = stationsZonesFactory;
