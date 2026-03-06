/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for trips API (btrz-api-inventory-trips).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, getPricingSimulation: function }}
 */
function tripsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /trips — Search for available trips by date, origin, destination, fare, product, channel, and price. Rate limited (e.g. 8000 req/10 min). See get-trips getSpec() for full query params (productId, originId, destinationId, fareIds, departureDate, returnDate, channel, currency, etc.).
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {Object} [opts.query] - Query params (productId, originId, destinationId, fareIds, departureDate, returnDate, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ trips: { departures: Object[], returns: Object[] } }>>}
   * @throws 400 INVALID_DATE, INVALID_DATE_FORMAT, INVALID_PRODUCTID, INVALID_ORIGIN, INVALID_DESTINATION, INVALID_CHANNEL, INVALID_FARE, INVALID_FAREID, INVALID_MANIFEST_STATUS, WRONG_DATA
   * @throws 401 Unauthorized
   * @throws 409 NO_HIGHER_OR_EQL_PRICE
   * @throws 500 Internal server error
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/trips",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /trip/:id — Get up-to-date information for a trip by its ID (base64-encoded trip summary from a search). Optional query: extraCapacityImpact, ignoreCutoffs, currency, ignoreOmitByAvailability, includeMoveToTrips.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {string} opts.id - Trip id (base64-encoded)
   * @param {Object} [opts.query] - Optional: extraCapacityImpact, ignoreCutoffs, currency, ignoreOmitByAvailability, includeMoveToTrips
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ trip: Object }>>}
   * @throws 400 INVALID_TRIP — tripId is invalid
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/trip/${id}`,
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /trips/pricing-simulation — Get pricing simulation for all purchase combinations for a schedule. Query: scheduleId, productId (required); purchaseDate, travelDate, includeReadable, includeMetadata, minimize (optional).
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {Object} [opts.query] - scheduleId, productId (required); purchaseDate, travelDate, includeReadable, includeMetadata, minimize
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<Object>>} Response shape per PricingSimulationResult definition
   * @throws 400 INVALID_SCHEDULE_ID, INVALID_PRODUCT_ID, INVALID_PRODUCT, ROUTE_NOT_FOUND, ONLY_JP_SUPPORTED, INVALID_DATE
   * @throws 401 Unauthorized, PRICING_SIMULATOR_DISABLED, PROVIDER_UNAUTHORIZED
   * @throws 404 SCHEDULE_NOT_FOUND, NO_MANIFEST
   * @throws 500 Internal server error
   */
  function getPricingSimulation({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/trips/pricing-simulation",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get,
    getPricingSimulation
  };
}

module.exports = tripsFactory;
