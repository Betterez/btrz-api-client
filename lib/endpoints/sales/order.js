"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} OrderPaymentsQuery
 * @property {string} channel - Channel where cart is being purchased (see API for allowed values)
 * @property {string} [providerId] - Account ID the transaction belongs to
 */

/**
 * @typedef {Object} OrderGetQuery
 * @property {string} [providerId] - Account ID for the order
 */

/**
 * Factory for order API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, get: function, overwrite: function }}
 */


function orderFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /order - create order.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.order - Order payload
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
   * POST /orders/:orderId/payments - overwrite order payments.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.orderId - Order id
   * @param {Object} opts.payments - Payments payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {OrderPaymentsQuery} [opts.query] - Query params (channel required, providerId optional)
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

  return {
    create: create,
    get: get,
    overwrite: overwrite
  };
}

module.exports = orderFactory;