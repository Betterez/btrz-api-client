const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for POST /orders-rules-validations (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} OrdersRulesValidationsPostQuery
 */

/**
 * Factory for orders-rules-validations API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function ordersRulesValidations({
  client,
  internalAuthTokenProvider
}) {
  /**
   * POST /orders-rules-validations - create an order rules validation (notification).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OrdersRulesValidationsPostQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} opts.orderRulesValidation - Validation payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token, jwtToken, query = {}, orderRulesValidation, headers
  }) {
    return client({
      url: "/orders-rules-validations",
      method: "post",
      params: query,
      data: {
        orderRulesValidation
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }
  return {
    create
  };
}

module.exports = ordersRulesValidations;
