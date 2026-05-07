

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for orders-rules-validations API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */


function ordersRulesValidations(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /orders-rules-validations - validate a rule using the data (body only). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.orderRulesValidation - Validation payload (rule and facts)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const orderRulesValidation = _ref2.orderRulesValidation;
    const headers = _ref2.headers;

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
