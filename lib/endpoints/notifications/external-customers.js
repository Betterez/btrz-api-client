"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Request body for POST /external-customers/ado/registration (btrz-api-notifications).
 * @typedef {Object} SaldoMaxRegistrationRequest
 * @property {string} email - User email to register in Saldo Max (verification code is sent to this email).
 */

/**
 * Factory for external-customers API (btrz-api-notifications). Saldo Max (ADO) verification-code registration and statement email.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ requestSaldoMaxVerificationCode: function, sendSaldoMaxStatementEmail: function }}
 */


function externalCustomersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /external-customers/ado/registration – Request a Saldo Max (ADO) verification code for the given email.
   * Requires BETTEREZ_APP JWT. Forwards to Saldo Max; sends verification code to the email.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {SaldoMaxRegistrationRequest} opts.data - Body: { email } (or { body: { email } })
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ code: string, message: string }>>}
   */
  function requestSaldoMaxVerificationCode(_ref2) {
    var data = _ref2.data,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/external-customers/ado/registration",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * POST /external-customers/ado/external-wallets/:walletId/statements — Request Saldo Max wallet statement email.
   * Notifications proxies to Inventory with sendMail. No query; body is empty JSON.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {string} opts.walletId - Saldo Max wallet id (path segment; encoded in the URL)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ success: boolean }>>}
   */
  function sendSaldoMaxStatementEmail(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        walletId = _ref3.walletId,
        headers = _ref3.headers;

    return client({
      url: "/external-customers/ado/external-wallets/" + encodeURIComponent(walletId) + "/statements",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {}
    });
  }

  return {
    requestSaldoMaxVerificationCode: requestSaldoMaxVerificationCode,
    sendSaldoMaxStatementEmail: sendSaldoMaxStatementEmail
  };
}

module.exports = externalCustomersFactory;