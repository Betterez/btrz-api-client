"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /stripe-terminals (btrz-api-payments). See get-handler getSpec().
 * @typedef {Object} StripeTerminalsListQuery
 * @property {string} [providerId] - Account provider (operator) ID; used by agencies/sellers; when omitted, authenticated account ID is used
 */

/**
 * Response for GET /stripe-terminals. Paginated list of Stripe readers.
 * @typedef {Object} GetStripeTerminalsResponse
 * @property {Object[]} stripeTerminals - Stripe Terminal reader objects (id, label, serial_number, status, etc.)
 * @property {string} next - Next page link; empty if no next page
 * @property {string} previous - Previous page link; empty if no previous page
 */

/**
 * Factory for Stripe terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, simulate: function }}
 */


function stripeTerminalsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /stripe-terminals - list Stripe Terminal readers for the account (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {StripeTerminalsListQuery} [opts.query] - Optional providerId
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<GetStripeTerminalsResponse>>} Rejects with 400 (STRIPE_SECRET_KEY_INVALID), 401, 404 (PAYMENT_METHOD_NOT_FOUND), 500.
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/stripe-terminals", {
      params: query,
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  /**
   * POST /stripe-terminals/:terminalId/simulate - simulate a payment on a Stripe Terminal reader. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Terminal ID (Stripe reader id, e.g. tmr_xxx)
   * @param {{ ccNumber: string }} opts.stripePayment - Payment to simulate; ccNumber required
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ stripeTerminalPayment: Object }>>} Rejects with 400 (WRONG_DATA), 401, 404 (PAYMENT_METHOD_NOT_FOUND, TRANSACTION_NOT_FOUND), 409 (errorCode/errorMessage), 500.
   */
  function simulate(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        stripePayment = _ref3.stripePayment,
        headers = _ref3.headers;

    return client({
      url: "/stripe-terminals/" + id + "/simulate",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { stripePayment: stripePayment }
    });
  }

  return {
    all: all,
    simulate: simulate
  };
}
module.exports = stripeTerminalsFactory;