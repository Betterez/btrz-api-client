const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * @typedef {Object} StationsProvincesQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for stations/provinces API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function stationsProvincesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /stations/provinces - list station provinces.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {StationsProvincesQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/stations/provinces",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = stationsProvincesFactory;
