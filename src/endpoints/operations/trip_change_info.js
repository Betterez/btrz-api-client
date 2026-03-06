const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for trip-change-info API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} trip-change-info API methods
 */
function tripChangeInfoFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /trip-change-info/:productId - get trip change info.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id
   * @param {Object} [opts.params] - Query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, productId, params, headers}) {
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
