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

  /**
   * POST /external-customers/ado/confirmation – Confirm a Saldo Max Profile V2 quick registration OTP.
   * Requires BETTEREZ_APP JWT.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {{confirmationToken: string, confirmationCode: string}} opts.data - Confirmation token and OTP code
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ code: string, userId?: string, isConfirmed?: boolean, message?: string }>>}
   */
  function confirmSaldoMaxRegistration({data, token, jwtToken, headers}) {
    return client({
      url: "/external-customers/ado/confirmation",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST /external-customers/ado/confirmation/resend – Resend a Saldo Max Profile V2 quick registration OTP.
   * Requires BETTEREZ_APP JWT.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {{confirmationToken: string}} opts.data - Confirmation token returned by quick registration
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ code: string, message?: string }>>}
   */
  function resendSaldoMaxRegistrationConfirmation({data, token, jwtToken, headers}) {
    return client({
      url: "/external-customers/ado/confirmation/resend",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /external-customers/ado/{externalId} – Update Saldo Max (ADO) client data (e.g. birthDate).
   * Requires BETTEREZ_APP JWT. Maps to ADO ModificarDatosClienteMonedero.
   * @param {Object} opts
   * @param {string} opts.id - ADO idCustomerUnique (path externalId)
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {{birthDate: string}} opts.data - Body; birthDate in DD/MM/YYYY
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ code: string, externalId: string, birthDate: string }>>}
   */
  function updateSaldoMaxClientData({id, data, token, jwtToken, headers}) {
    return client({
      url: `/external-customers/ado/${encodeURIComponent(id)}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  const saldoMax = {
    /**
     * GET /external-customers/ado - get SaldoMax user by email, phone or walletId.
     * The querying precedence is (from higher to lower precedence):
     *
     * - email
     * - phone
     * - walletId
     *
     * Only the first option found is used in the lookup.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {{email?: string, phone?: string, walletId?: string}} opts.query - Query to get the SaldoMax user
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ adoUsers: Array<Object> }>>}
     * @throws When response is 4xx/5xx (400, 401, 404 EXTERNAL_WALLET_NOT_FOUND, 500)
     */
    get: ({token, jwtToken, query, headers}) => {
      return client.get("/external-customers/ado", {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create: registerSaldoMax,
    update: updateSaldoMaxClientData,
    confirmation: {
      create: confirmSaldoMaxRegistration,
      resend: {
        create: resendSaldoMaxRegistrationConfirmation
      }
    }
  };

  return {
    saldoMax,
    // Keep here for backwards compat
    registerSaldoMax
  };
}

module.exports = externalCustomersFactory;
