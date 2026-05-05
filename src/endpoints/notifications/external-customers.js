const {authorizationHeaders} = require("../endpoints_helpers.js");

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
function externalCustomersFactory({client, internalAuthTokenProvider}) {
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
  function requestSaldoMaxVerificationCode({data, token, jwtToken, headers}) {
    return client({
      url: "/external-customers/ado/registration",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
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
  function sendSaldoMaxStatementEmail({token, jwtToken, walletId, headers}) {
    return client({
      url: `/external-customers/ado/external-wallets/${encodeURIComponent(walletId)}/statements`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {}
    });
  }

  return {
    requestSaldoMaxVerificationCode,
    sendSaldoMaxStatementEmail
  };
}

module.exports = externalCustomersFactory;
