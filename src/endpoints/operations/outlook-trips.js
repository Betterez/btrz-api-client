const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} OutlookTripsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for outlook-trips API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} outlook-trips API methods
 */
function outlookTripsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /outlook-trips - get outlook trips.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OutlookTripsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/outlook-trips",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = outlookTripsFactory;
