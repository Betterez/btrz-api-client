const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} SegmentsInformationTablesQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for segments-information-tables API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function segmentInformationTableFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /segments-information-tables/:routeId - get segments information table by route id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {SegmentsInformationTablesQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, routeId, query = {}, headers}) {
    return client({
      url: `/segments-information-tables/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = segmentInformationTableFactory;
