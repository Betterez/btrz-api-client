"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Request body for POST /external-customers/ado/registration (btrz-api-notifications).
 * @typedef {Object} SaldoMaxRegistrationRequest
 * @property {string} email - User email to register in Saldo Max (verification code is sent to this email).
 */

/**
 * Factory for external-customers API (btrz-api-notifications). Saldo Max (ADO) verification-code registration.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ requestSaldoMaxVerificationCode: function }}
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

  return {
    requestSaldoMaxVerificationCode: requestSaldoMaxVerificationCode
  };
}

module.exports = externalCustomersFactory;