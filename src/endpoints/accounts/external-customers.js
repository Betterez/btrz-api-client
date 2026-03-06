/* eslint-disable import/extensions */
const {authorizationHeaders} = require("../endpoints_helpers");

/**
 * Factory for external-customers API (btrz-api-accounts). Saldo Max (ADO) registration proxy.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ registerSaldoMax: function }}
 */
function externalCustomersFactory({client, internalAuthTokenProvider}) {
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
  function registerSaldoMax({data, token, jwtToken, headers}) {
    return client({
      url: "/external-customers/ado",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    registerSaldoMax
  };
}

module.exports = externalCustomersFactory;
