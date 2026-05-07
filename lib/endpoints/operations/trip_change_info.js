

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /trip-change-info/:productId (btrz-api-operations get-trip-change-info getSpec).
 * @typedef {Object} TripChangeInfoGetQuery
 * @property {string} [providerId] - Provider account id
 * @property {string} [ticketNumber] - Ticket number (required for Reservation products)
 * @property {string} [lastName] - Passenger last name (required for Reservation products)
 * @property {string} [departureDate] - Departure date yyyy-mm-dd (required for Reservation products)
 * @property {string} [returnDate] - Return date yyyy-mm-dd (optional for Reservation products)
 * @property {string} [ticketId] - Ticket id
 * @property {string} [channel] - Sales change channel (default websales)
 */

/**
 * Factory for trip-change-info API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} trip-change-info API methods
 */


function tripChangeInfoFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /trip-change-info/:productId - get trip change info.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id
   * @param {TripChangeInfoGetQuery} [opts.params] - Query params (providerId, ticketNumber, lastName, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const productId = _ref2.productId;
    const params = _ref2.params;
    const headers = _ref2.headers;

    return client({
      url: `/trip-change-info/${productId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  return {
    get
  };
}

module.exports = tripChangeInfoFactory;
