/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function orderFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /order - create order. Body: orderRequest (cartId, customerInfo, payments, channel, etc.).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.order - Order request body (orderRequest)
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, order, jwtToken, headers}) {
    return client({
      url: "/order",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
  function get({token, orderId, query = {}, headers}) {
    return client({
      url: `/order/${orderId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function overwrite({token, orderId, payments, jwtToken, headers, query = {}}) {
    return client({
      url: `/orders/${orderId}/payments`,
      method: "post",
      data: payments,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function patch({token, jwtToken, headers, operation, query = {}}) {
    return client({
      url: "/orders",
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operation},
      params: query
    });
  }

  return {
    create,
    get,
    overwrite,
    patch
  };
}

module.exports = orderFactory;
