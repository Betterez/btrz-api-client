/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /segments-information-tables/:routeId (btrz-api-inventory-trips). See get-by-id-handler getSpec().
 * @typedef {Object} SegmentsInformationTablesQuery
 * @property {string} [providerId] - Provider/account id of the route when different from the authenticated user (24-char hex ObjectId)
 */

/**
 * Factory for segments-information-tables API (btrz-api-inventory-trips).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function segmentInformationTableFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /segments-information-tables/:routeId — Returns segment information tables for the route (distances, durations, durationsHHMM between stops). Requires BETTEREZ_APP audience.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {string} opts.routeId - Route id (24-char hex ObjectId)
   * @param {SegmentsInformationTablesQuery} [opts.query] - Optional providerId
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ segmentInformationTables: { distances: Object, durations: Object, durationsHHMM: Object } }>>}
   * @throws 400 INVALID_ROUTE_ID — routeId not 24 hex characters
   * @throws 401 Unauthorized
   * @throws 404 ROUTE_NOT_FOUND
   * @throws 500 Internal server error
   */
  function get({token, jwtToken, routeId, query = {}, headers}) {
    return client({
      url: `/segments-information-tables/${routeId}`,
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = segmentInformationTableFactory;
