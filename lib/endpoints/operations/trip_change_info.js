"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        productId = _ref2.productId,
        params = _ref2.params,
        headers = _ref2.headers;

    return client({
      url: "/trip-change-info/" + productId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: params
    });
  }

  return {
    get: get
  };
}

module.exports = tripChangeInfoFactory;