const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /filtered-trips (btrz-api-inventory). See get-filtered-trips getSpec().
 * @typedef {Object} FilteredTripsListQuery
 * @property {string} [providerIds] - Comma-separated provider IDs
 * @property {string} [productId] - Product ID to filter by
 * @property {string} [originId] - Origin station ID to filter by
 * @property {string} [destinationId] - Destination station ID to filter by
 * @property {number} [page] - Page for pagination
 * @property {string} [orderBy] - Field to order by
 * @property {string} [orderDir] - asc (1) or desc (-1)
 */

/**
 * Factory for filtered-trips API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, remove: function }}
 */
function filteredTripsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /filtered-trips - list filtered trips (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {FilteredTripsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ filteredTrips: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (401, 500)
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/filtered-trips", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /filtered-trips - add a trip to the blacklist (filtered trips).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.tripSegmentsId - Base64-encoded JSON (FilteredTripRequest: productId, segments)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ filteredTrip: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 409 TRIP_ALREADY_FILTERED, 500)
   */
  function create({token, jwtToken, tripSegmentsId, headers}) {
    return client({
      url: "/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tripSegmentsId}
    });
  }

  /**
   * DELETE /filtered-trip/:filteredTripId - remove a filtered trip from the blacklist.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.filteredTripId - Filtered trip id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<void>>}
   * @throws When response is 4xx/5xx (400, 401, 500)
   */
  function remove({token, jwtToken, filteredTripId, headers}) {
    return client({
      url: `/filtered-trip/${filteredTripId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    create,
    remove
  };
}

module.exports = filteredTripsFactory;
