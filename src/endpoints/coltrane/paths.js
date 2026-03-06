/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /paths (btrz-api-coltrane). All except metrics and preferredAlgorithm are required by the API.
 * @typedef {Object} ColtranePathsListQuery
 * @property {string} [providerId] - Account ID of the travel provider (24-char hex)
 * @property {string} [productId] - Product ID belonging to the provider (24-char hex)
 * @property {string} [originId] - Origin station ID (24-char hex); must differ from destinationId
 * @property {string} [destinationId] - Destination station ID (24-char hex)
 * @property {string} [departureFromDate] - Start of departure interval; ISO 8601 (e.g. 2021-10-07T17:30:00.000-0400)
 * @property {string} [departureToDate] - End of departure interval; ISO 8601; interval max 25h, must be after departureFromDate
 * @property {string} [preferredAlgorithm] - "search_algorithm_fast" or "search_algorithm_exhaustive"
 * @property {string|boolean} [metrics] - If true, response includes metrics object (debugging)
 */

/**
 * Factory for Coltrane paths API (btrz-api-coltrane).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function coltraneFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /paths — search for travel paths between two stations in a departure time interval.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {ColtranePathsListQuery} [opts.query] - Query params; providerId, productId, originId, destinationId, departureFromDate, departureToDate required
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ data: { paths: Array<{ segments: Array<{ scheduleId: string, manifestDay: string, fromLegIndex: number, toLegIndex: number }> }>, metrics?: object } }>>}
   * @throws {import("axios").AxiosError} 400 INVALID_QUERY_PARAMETERS (invalid params, originId=destinationId, interval &gt; 25h, or invalid preferredAlgorithm)
   * @throws {import("axios").AxiosError} 401 Unauthorized
   * @throws {import("axios").AxiosError} 500 Internal server error
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/paths",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = coltraneFactory;
