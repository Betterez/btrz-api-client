const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Factory for payment-method customers API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, remove: function }}
 */
function customersFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /payment-methods/:paymentMethodId/customers/:customerId - get customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {string} opts.customerId - Customer id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, paymentMethodId, customerId, headers}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /payment-methods/:paymentMethodId/customers - create customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {Object} opts.customer - Customer payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, paymentMethodId, customer, headers}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {customer}
    });
  }

  /**
   * DELETE /payment-methods/:paymentMethodId/customers/:customerId - remove customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {string} opts.customerId - Customer id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, paymentMethodId, customerId, headers}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    remove,
    create,
    get
  };
}

module.exports = customersFactory;
