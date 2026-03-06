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
   * GET /payment-methods/:paymentMethodId/customers/:customerId/cards - list cards.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.paymentMethodId - Payment method id
   * @param {string} opts.customerId - Customer id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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