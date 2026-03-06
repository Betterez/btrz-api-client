const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Factory for manifest-leg-for-tickets API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} manifest-leg-for-tickets API methods
 */
function manifestLegForTicketsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /manifest-leg-for-tickets/:ticketId - get manifest leg for ticket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} [opts.params] - Query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, ticketId, params, headers}) {
    return client({
      url: `/manifest-leg-for-tickets/${ticketId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  return {
    get
  };
}

module.exports = manifestLegForTicketsFactory;
