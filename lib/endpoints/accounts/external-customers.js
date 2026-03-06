"use strict";

/* eslint-disable import/extensions */
var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for external-customers API (btrz-api-accounts). Saldo Max (ADO) registration proxy.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ registerSaldoMax: function }}
 */


function externalCustomersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /external-customers/ado – Register a user with Saldo Max (ADO). Requires BETTEREZ_APP JWT.
   * Body: SaldoMaxRegistrationRequest at root or { body: SaldoMaxRegistrationRequest }.
   * Required: firstName, lastName, email, password (Base64), verificationCode, isoCode (2-letter).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {Object} opts.data - Request body (or { body: SaldoMaxRegistrationRequest })
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ code: string }>>}
   */
  function registerSaldoMax(_ref2) {
    var data = _ref2.data,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/external-customers/ado",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    registerSaldoMax: registerSaldoMax
  };
}

module.exports = externalCustomersFactory;