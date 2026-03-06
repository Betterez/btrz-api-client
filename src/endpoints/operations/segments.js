const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function segmentsFactory({client, internalAuthTokenProvider}) {
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
  function all({token, jwtToken, productId, ticketId, providerId, headers}) {
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
