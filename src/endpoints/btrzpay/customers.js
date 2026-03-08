const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Factory for payment-method customers API (btrz-api-payments). Path: payment-methods/{id}/customers.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, remove: function }}
 */
function customersFactory({client, internalAuthTokenProvider}) {
  /**
   * GET .../customers/:customerId - get customer. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method ID (UUID v4)
   * @param {string} opts.customerId - Customer ID (object ID)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customer: Object }>>}
   */
  function get({token, jwtToken, paymentMethodId, customerId, headers}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST .../customers - create customer. Body: { customer } (PostCustomerRequest: channel, customer.id/number/email). No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method ID (UUID v4)
   * @param {Object} opts.customer - PostCustomerRequest (channel, customer with id, number, email)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ customer: Object }>>}
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
   * DELETE .../customers/:customerId - remove customer (and saved cards). No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method ID (UUID v4)
   * @param {string} opts.customerId - Customer ID (object ID)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ success: boolean }>>}
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
