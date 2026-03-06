const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} ExternalBookingsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for external-bookings API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} external-bookings API methods
 */
function externalBookingsFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /external-bookings - create external booking.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.externalBooking - External booking payload
   * @param {Object} [opts.headers] - Optional headers
   * @param {ExternalBookingsQuery} [opts.query] - Query params
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, externalBooking, headers, query = {}}) {
    return client({
      url: "/external-bookings",
      method: "post",
      data: externalBooking,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /external-bookings/:ticketId - remove external booking.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, token, ticketId, headers}) {
    return client({
      url: `/external-bookings/${ticketId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create,
    remove
  };
}

module.exports = externalBookingsFactory;
