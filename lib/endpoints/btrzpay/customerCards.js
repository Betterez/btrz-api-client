"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for customer cards API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, remove: function }}
 */


function customerCardsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        paymentMethodId = _ref2.paymentMethodId,
        customerId = _ref2.customerId,
        customerCardId = _ref2.customerCardId,
        headers = _ref2.headers;

    return client.get("/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards/" + customerCardId, {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        paymentMethodId = _ref3.paymentMethodId,
        customerId = _ref3.customerId,
        headers = _ref3.headers;

    return client.get("/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards", {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        paymentMethodId = _ref4.paymentMethodId,
        customerId = _ref4.customerId,
        customerCard = _ref4.customerCard,
        headers = _ref4.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { customerCard: customerCard }
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
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        paymentMethodId = _ref5.paymentMethodId,
        customerId = _ref5.customerId,
        customerCardId = _ref5.customerCardId,
        headers = _ref5.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards/" + customerCardId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    remove: remove,
    create: create,
    get: get,
    all: all
  };
}

module.exports = customerCardsFactory;