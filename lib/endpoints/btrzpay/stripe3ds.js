"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Request body for POST /stripe-payment-intent (btrz-api-payments). PaymentIntentPostData.
 * @typedef {Object} PaymentIntentPostData
 * @property {string} providerName - Provider name (e.g. "stripe") used to resolve the payment method with Stripe 3DS
 * @property {Object} data - Payment data: card details, amount, currency, transactionId, customer info, etc.
 */

/**
 * Factory for Stripe 3DS API (btrz-api-payments): create Stripe Payment Intent for 3DS flows.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ createPaymentIntent: function }}
 */


function stripe3dsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /stripe-payment-intent - creates a Stripe Payment Intent for 3DS; returns requires_action and payment_intent_client_secret.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.providerName - Provider name (e.g. "stripe")
   * @param {Object} opts.data - Payment data (card, amount, currency, transactionId, etc.)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ requires_action: boolean, payment_intent_client_secret: string }>>} PaymentIntentResponse. Rejects with 400 (WRONG_DATA, PAYMENT_INTENT_MISSING_PAYMENT_DATA, PAYMENT_INTENT_MISSING_PROVIDER, PROVIDER_NOT_FOUND, MISSING_PAYMENT_METHOD_PARAMS, PAYMENT_METHOD_NOT_FOUND, STRIPE_MISSING_PRIVATE_KEY, MISSING_PAYMENT_DATA), 401, 500.
   */
  function createPaymentIntent(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        providerName = _ref2.providerName,
        data = _ref2.data,
        headers = _ref2.headers;

    return client.post("/stripe-payment-intent", { providerName: providerName, data: data }, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    createPaymentIntent: createPaymentIntent
  };
}

module.exports = stripe3dsFactory;