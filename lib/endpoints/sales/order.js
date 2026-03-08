"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for POST /orders/:orderId/payments (btrz-api-sales post-payments-handler getSpec).
 * @typedef {Object} OrderPaymentsQuery
 * @property {string} [channel] - Channel where cart is being purchased (defaults to 'none' when not provided)
 * @property {string} [providerId] - Account id the transaction belongs to
 */

/**
 * Query params for GET /order/:orderId (btrz-api-sales get-order getSpec).
 * @typedef {Object} OrderGetQuery
 * @property {string} [providerId] - Provider account id
 */

/**
 * Query params for PATCH /orders (btrz-api-sales patch-handler getSpec).
 * @typedef {Object} OrderPatchQuery
 * @property {string} [includePaidOrExpired] - 'true' or 'false'; whether to update when transaction is already paid or expired
 */

/**
 * Factory for order API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, get: function, overwrite: function, patch: function }}
 */


function orderFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /order - create order. Body: orderRequest (cartId, customerInfo, payments, channel, etc.).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.order - Order request body (orderRequest)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    var token = _ref2.token,
        order = _ref2.order,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/order",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: order
    });
  }

  /**
   * GET /order/:orderId - get order by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.orderId - Order id
   * @param {OrderGetQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var token = _ref3.token,
        orderId = _ref3.orderId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/order/" + orderId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /orders/:orderId/payments - overwrite order payments. Body must include payments (array). Endpoint is internal (hideInDocumentation).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.orderId - Order (transaction) id
   * @param {Object} opts.payments - Request body; must include property payments (array of payment objects)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {OrderPaymentsQuery} [opts.query] - Query params (channel, providerId)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function overwrite(_ref4) {
    var token = _ref4.token,
        orderId = _ref4.orderId,
        payments = _ref4.payments,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query;

    return client({
      url: "/orders/" + orderId + "/payments",
      method: "post",
      data: payments,
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PATCH /orders - complete order creation after referenced payment (e.g. waitForPaymentCompletion). Body: operation (name, data with transactionId, paymentResult). Query: includePaidOrExpired.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {Object} opts.operation - Operation object: { name, data: { transactionId, paymentResult } }
   * @param {OrderPatchQuery} [opts.query] - Query params (includePaidOrExpired)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers,
        operation = _ref5.operation,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query;

    return client({
      url: "/orders",
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operation: operation },
      params: query
    });
  }

  return {
    create: create,
    get: get,
    overwrite: overwrite,
    patch: patch
  };
}

module.exports = orderFactory;