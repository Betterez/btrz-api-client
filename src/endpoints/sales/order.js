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
 * Factory for order API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, get: function, overwrite: function }}
 */
function orderFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /order - create order.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.order - Order payload
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
   * POST /orders/:orderId/payments - overwrite order payments.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.orderId - Order id
   * @param {Object} opts.payments - Payments payload
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

  return {
    create,
    get,
    overwrite
  };
}

module.exports = orderFactory;
