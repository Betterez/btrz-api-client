const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Factory for customer cards API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, remove: function }}
 */
function customerCardsFactory({client, internalAuthTokenProvider}) {
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
  function get({token, jwtToken, paymentMethodId, customerId, customerCardId, headers}) {
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
  function all({token, jwtToken, paymentMethodId, customerId, headers}) {
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
  function create({token, jwtToken, paymentMethodId, customerId, customerCard, headers}) {
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
  function remove({token, jwtToken, paymentMethodId, customerId, customerCardId, headers}) {
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
