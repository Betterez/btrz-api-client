"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for POST /customers/reset (btrz-api-notifications). See post-customers-reset-password getSpec().
 * @typedef {Object} CustomersResetPostQuery
 * @property {string} providerId - Account id of the customer (required)
 * @property {string} lang - Language of the email (required)
 * @property {string} [customerNumber] - Customer number (include at least one of customerNumber or email)
 * @property {string} [email] - Customer email (include at least one of customerNumber or email)
 * @property {string} [channel] - Channel the customer is using to restore the pass
 * @property {string} [platform] - "ios" | "android" | "web"
 * @property {string} [appName] - Name of the app
 * @property {string} [appVersion] - Version of the app
 * @property {string} [cartPath] - (Deprecated) Initial path of the cart websales endpoint
 */

/**
 * Query params for POST /customers/activation (btrz-api-notifications). See post-customers-activation getSpec().
 * @typedef {Object} CustomersActivationPostQuery
 * @property {string} providerId - Account id of the customer (required)
 * @property {string} [lang] - Language of the email (default en-us)
 * @property {string} [channel] - Channel (e.g. "mobileapp")
 * @property {string} [platform] - "ios" | "android" | "web"
 * @property {string} [appVersion] - Version of the client app
 * @property {string} [appName] - Name of the client app
 */

/**
 * Factory for customers notifications API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ sendResetPasswordEmail: function, sendActivationEmail: function }}
 */


function customersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /customers/reset - send reset password email to customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CustomersResetPostQuery} [opts.query] - Query params (providerId, lang required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function sendResetPasswordEmail(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/customers/reset",
      method: "post",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /customers/activation - send activation email to customer.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {CustomersActivationPostQuery} [opts.query] - Query params (providerId required)
   * @param {Object} [opts.data] - Request body (CustomerForActivation)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function sendActivationEmail(_ref3) {
    var token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        data = _ref3.data,
        headers = _ref3.headers;

    return client({
      url: "/customers/activation",
      method: "post",
      params: query,
      data: data,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    sendResetPasswordEmail: sendResetPasswordEmail,
    sendActivationEmail: sendActivationEmail
  };
}

module.exports = customersFactory;