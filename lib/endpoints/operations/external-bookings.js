

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for external-bookings API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} external-bookings API methods
 */


function externalBookingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /external-bookings - create external booking. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.externalBooking - External booking payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const token = _ref2.token;
    const externalBooking = _ref2.externalBooking;
    const headers = _ref2.headers;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/external-bookings",
      method: "post",
      data: externalBooking,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /external-bookings/:ticketId - remove external booking. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const ticketId = _ref3.ticketId;
    const headers = _ref3.headers;

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
