/* eslint-disable max-len */
/* eslint-disable import/extensions */
const {authorizationHeaders} = require("../endpoints_helpers.js");

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
function adyenFactory({client, internalAuthTokenProvider}) {
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
  function getPaymentMethods({token, jwtToken, query = {}, headers}) {
    return client.get("/adyen-payment-methods", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    getPaymentMethods
  };
}

module.exports = adyenFactory;
