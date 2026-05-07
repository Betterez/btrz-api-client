

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for customer cards API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, remove: function }}
 */


function customerCardsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET .../cards/:customerCardId - get one card by id. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method ID (UUID v4)
   * @param {string} opts.customerId - Customer ID (object ID)
   * @param {string} opts.customerCardId - Card ID (UUID v4)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customerCard: Object }>>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const paymentMethodId = _ref2.paymentMethodId;
    const customerId = _ref2.customerId;
    const customerCardId = _ref2.customerCardId;
    const headers = _ref2.headers;

    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET .../cards - list all cards for customer. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method ID (UUID v4)
   * @param {string} opts.customerId - Customer ID (object ID)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customerCards: Array<Object> }>>}
   */
  function all(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const paymentMethodId = _ref3.paymentMethodId;
    const customerId = _ref3.customerId;
    const headers = _ref3.headers;

    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST .../cards - create stored card. Body: { customerCard }. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method ID (UUID v4)
   * @param {string} opts.customerId - Customer ID (object ID)
   * @param {Object} opts.customerCard - Card payload (see PostCustomerCardRequest)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customerCard: Object }>>}
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const paymentMethodId = _ref4.paymentMethodId;
    const customerId = _ref4.customerId;
    const customerCard = _ref4.customerCard;
    const headers = _ref4.headers;

    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}/cards`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {customerCard}
    });
  }

  /**
   * DELETE .../cards/:customerCardId - remove stored card. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method ID (UUID v4)
   * @param {string} opts.customerId - Customer ID (object ID)
   * @param {string} opts.customerCardId - Card ID (UUID v4)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ success: boolean }>>}
   */
  function remove(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const paymentMethodId = _ref5.paymentMethodId;
    const customerId = _ref5.customerId;
    const customerCardId = _ref5.customerCardId;
    const headers = _ref5.headers;

    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    remove,
    create,
    get,
    all
  };
}

module.exports = customerCardsFactory;
