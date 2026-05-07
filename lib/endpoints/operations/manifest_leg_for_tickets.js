

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for manifest-leg-for-tickets API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} manifest-leg-for-tickets API methods
 */


function manifestLegForTicketsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /manifest-leg-for-tickets/:ticketId - get manifest leg for ticket. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.ticketId - Ticket id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const ticketId = _ref2.ticketId;
    const params = _ref2.params;
    const headers = _ref2.headers;

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
