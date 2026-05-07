"use strict";

/* eslint-disable max-len */
/* eslint-disable import/extensions */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /adyen-payment-methods (btrz-api-payments). See getAdyenPaymentMethods getSpec().
 * @typedef {Object} AdyenPaymentMethodsQuery
 * @property {string} [countryCode] - Two-letter ISO country code to filter allowed payment methods
 * @property {string} [currencyCode] - Three-letter ISO currency code to filter allowed payment methods
 * @property {number} [amount] - Amount used to determine allowed payment methods
 * @property {string} [transactionId] - Transaction identifier for the payment session
 */

/**
 * Factory for Adyen API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getPaymentMethods: function }}
 */


function adyenFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /adyen-payment-methods - returns allowed Adyen payment methods for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AdyenPaymentMethodsQuery} [opts.query] - Query params (countryCode, currencyCode, amount, transactionId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ AdyenPaymentMethods: Array<{ name: string, type: string, brands?: string[] }> }>>}
   *   Resolves with GetAdyenPaymentMethodsResponse. Rejects with 400 (INVALID_*), 404 (ADYEN_PAYMENT_METHODS_NOT_FOUND, PROVIDER_NOT_FOUND, PAYMENT_METHOD_NOT_FOUND).
   */
  function getPaymentMethods(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/adyen-payment-methods", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getTerminals(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers,
        data = _ref3.data;

    return client.get("/adyen-terminals", {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    getPaymentMethods: getPaymentMethods,
    getTerminals: getTerminals
  };
}

module.exports = adyenFactory;