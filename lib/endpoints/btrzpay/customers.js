"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for payment-method customers API (btrz-api-payments). Path: payment-methods/{id}/customers.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function, remove: function }}
 */


function customersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        paymentMethodId = _ref2.paymentMethodId,
        customerId = _ref2.customerId,
        headers = _ref2.headers;

    return client.get("/payment-methods/" + paymentMethodId + "/customers/" + customerId, {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        paymentMethodId = _ref3.paymentMethodId,
        customer = _ref3.customer,
        headers = _ref3.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { customer: customer }
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
  function remove(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        paymentMethodId = _ref4.paymentMethodId,
        customerId = _ref4.customerId,
        headers = _ref4.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers/" + customerId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    remove: remove,
    create: create,
    get: get
  };
}

module.exports = customersFactory;