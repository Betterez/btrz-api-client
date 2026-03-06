const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /stations/zones (btrz-api-inventory). See 01-get-stations-zones getSpec().
 * @typedef {Object} StationsZonesQuery
 * @property {string} [accountIds] - Comma-separated account ids to get zones for (agency accounts)
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
   * @param {StationsZonesQuery} [opts.query] - Query params (accountIds)
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
