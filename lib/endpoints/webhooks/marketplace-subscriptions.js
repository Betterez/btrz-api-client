const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for marketplace webhook subscriptions API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, delete: function }}
 */
function marketplaceSubscriptionsFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * POST /marketplace-subscriptions
   * @param {Object} opts
   * @param {string} [opts.token]
   * @param {string} [opts.jwtToken]
   * @param {string} opts.marketplace
   * @param {Object} [opts.headers]
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token,
    jwtToken,
    marketplace,
    headers
  }) {
    return client({
      url: "/marketplace-subscriptions",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        marketplace
      }
    });
  }

  /**
   * DELETE /marketplace-subscriptions
   * @param {Object} opts
   * @param {string} [opts.token]
   * @param {string} [opts.jwtToken]
   * @param {string} opts.marketplace
   * @param {Object} [opts.headers]
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteFn({
    token,
    jwtToken,
    marketplace,
    headers
  }) {
    return client({
      url: "/marketplace-subscriptions",
      method: "delete",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        marketplace
      }
    });
  }
  return {
    create,
    delete: deleteFn
  };
}
module.exports = marketplaceSubscriptionsFactory;