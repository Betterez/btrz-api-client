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
   * GET /payment-methods/:paymentMethodId/customers/:customerId/cards/:customerCardId - get card.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {string} opts.customerId - Customer id
   * @param {string} opts.customerCardId - Customer card id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, paymentMethodId, customerId, customerCardId, headers}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /payment-methods/:paymentMethodId/customers/:customerId/cards - list cards.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {string} opts.customerId - Customer id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, paymentMethodId, customerId, headers}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /payment-methods/:paymentMethodId/customers/:customerId/cards - create card.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {string} opts.customerId - Customer id
   * @param {Object} opts.customerCard - Customer card payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
   * DELETE /payment-methods/:paymentMethodId/customers/:customerId/cards/:customerCardId - remove card.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {string} opts.customerId - Customer id
   * @param {string} opts.customerCardId - Customer card id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
