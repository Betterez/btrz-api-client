

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query param for GET /products/:productId/segments/:ticketId (btrz-api-operations getSpec). Client passes via opts.providerId.
 * @typedef {Object} SegmentsListQuery
 * @property {string} [providerId] - Provider/account id (Id of the provider account)
 */

/**
 * Factory for segments API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} segments API methods
 */


function segmentsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /products/:productId/segments/:ticketId - list segments for product/ticket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id
   * @param {string} opts.ticketId - Ticket id
   * @param {string} [opts.providerId] - Provider id (sent as query param)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const productId = _ref2.productId;
    const ticketId = _ref2.ticketId;
    const providerId = _ref2.providerId;
    const headers = _ref2.headers;

    return client({
      url: `/products/${productId}/segments/${ticketId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: {
        providerId
      }
    });
  }

  return {
    all
  };
}

module.exports = segmentsFactory;
