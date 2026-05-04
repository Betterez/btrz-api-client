const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Body for PUT /external-wallets/saldo-max/:walletId/movements (ExternalWalletMovementData).
 * @typedef {Object} ExternalWalletMovementData
 * @property {number} amount
 * @property {'purchase'|'refund'} type - `purchase` withdraws balance; `refund` adds balance (ADO)
 * @property {string|number} nip - Four-digit NIP; prefer string to preserve leading zeros (e.g. "0202")
 * @property {string} transactionId - Betterez transaction id; sent to ADO as erpcoOperationId
 * @property {boolean} [sendMail] - Optional; ADO receipt email on success
 */

/**
 * Factory for external-wallets API (btrz-api-inventory). SaldoMax external wallets only.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{
 *   saldoMax: {
 *     all: function, get: function, create: function, update: function,
 *     nip: object, authorization: { create: function }, movements: { create: function },
 *     statements: { create: function }
 *   }
 * }}
 */
function externalWalletsFactory({client, internalAuthTokenProvider}) {
  /**
   * @type {{
   *   all: function, create: function, get: function, update: function,
   *   nip: object, authorization: { create: function }, movements: object, statements: { create: function }
   * }}
   */
  const saldoMax = {
    /**
     * GET /external-wallets/saldo-max - list SaldoMax external wallets (paginated).
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Pagination query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ externalWallets: Array, next?: string, previous?: string, count: number }>>}
     * @throws When response is 4xx/5xx (401, 500)
     */
    all: ({token, jwtToken, query = {}, headers}) => {
      return client.get("/external-wallets/saldo-max", {
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
      });
    },
    /**
     * POST /external-wallets/saldo-max - create SaldoMax external wallet.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.externalWallet - External wallet payload (ExternalWalletData: firstName, lastName, email, tel, dob, nip)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ externalWallet: Object }>>}
     * @throws When response is 4xx/5xx (400, 401, 409 DUPLICATE_EXTERNAL_WALLET_EMAIL/TEL, 500)
     */
    create: ({token, jwtToken, externalWallet, headers}) => {
      return client({
        url: "/external-wallets/saldo-max",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {externalWallet}
      });
    },
    /**
     * GET /external-wallets/saldo-max/:walletId - get SaldoMax external wallet by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.walletId - Wallet id (24 hex characters)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ externalWallet: Object }>>}
     * @throws When response is 4xx/5xx (400, 401, 404 EXTERNAL_WALLET_NOT_FOUND, 500)
     */
    get: ({token, jwtToken, walletId, headers}) => {
      return client.get(`/external-wallets/saldo-max/${walletId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * PUT /external-wallets/saldo-max/:walletId - update SaldoMax external wallet.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.externalWallet - External wallet payload (must include _id)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ externalWallet: Object }>>}
     * @throws When response is 4xx/5xx (400, 401, 404 EXTERNAL_WALLET_NOT_FOUND, 500)
     */
    update: ({token, jwtToken, externalWallet, headers}) => {
      const externalWalletFieldsToUpdate = {
        nip: externalWallet.nip,
        walletNumber: externalWallet.walletNumber,
        status: externalWallet.status
      };

      return client({
        url: `/external-wallets/saldo-max/${externalWallet._id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          externalWallet: externalWalletFieldsToUpdate
        }
      });
    },
    nip: {
      /**
       * PUT /external-wallets/saldo-max/:walletId/nip - update SaldoMax external wallet's NIP.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} opts.walletId - The walletId of the SaldoMax wallet
       * @param {Object} opts.nip - The new NIP
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{ externalWallet: Object }>>}
       * @throws When response is 4xx/5xx (400, 401, 404 EXTERNAL_WALLET_NOT_FOUND, 500)
       */
      update: ({token, jwtToken, walletId, nip, headers}) => {
        return client({
          url: `/external-wallets/saldo-max/${walletId}/nip`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          data: {
            nip
          }
        });
      }
    },
    /** @type {{ create: function }} */
    authorization: {
      /**
       * POST /external-wallets/saldo-max/:walletId/authorization — Validate NIP with ADO Saldo Max (authorize wallet).
       * Typical: `authorization.create({ walletId, nip, token, jwtToken, headers })` — body sent as `{ nip }`.
       * Alternate body: pass `nipAuthorization` instead of `nip` (wrapper form per API).
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {string} opts.walletId - Saldo Max wallet id (idWallet)
       * @param {string|number} [opts.nip] - Four-digit NIP (use with `token`/`jwtToken` as above, or use nipAuthorization)
       * @param {{ nip: string|number }} [opts.nipAuthorization] - Wrapped NIP payload instead of `nip`
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{ valid: boolean }>>}
       * @throws When response is 4xx/5xx (400 WRONG_DATA, INVALID_WALLET_ID, VALIDATE_NIP_WALLET_MISMATCH;
       *   401; 403 incorrect NIP; 404; 502; 503; 500)
       */
      create: ({token, jwtToken, walletId, nip, nipAuthorization, headers}) => {
        const data = nipAuthorization != null ? {nipAuthorization} : {nip};
        return client({
          url: `/external-wallets/saldo-max/${walletId}/authorization`,
          method: "post",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          data
        });
      }
    },
    /** @type {{ create: function }} */
    movements: {
      /**
       * PUT /external-wallets/saldo-max/:walletId/movements — Validate NIP, balance, then apply movement in ADO.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {string} opts.walletId - Saldo Max wallet id (idWallet)
       * @param {ExternalWalletMovementData} opts.movement
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{ result: { operationId?: string, region?: string } }>>}
       * @throws When response is 4xx/5xx (400 WRONG_DATA, INVALID_MOVEMENT_*, INSUFFICIENT_FUNDS,
       *   VALIDATE_NIP_WALLET_MISMATCH; 401; 403 INVALID_NIP, WALLET_NOT_ACTIVE; 404; 502; 503; 500)
       */
      create: ({token, jwtToken, walletId, movement, headers}) => {
        return client({
          url: `/external-wallets/saldo-max/${walletId}/movements`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          data: {movement}
        });
      }
    },
    /** @type {{ create: function }} */
    statements: {
      /**
       * POST /external-wallets/saldo-max/:walletId/statements — Saldo Max wallet statements (Inventory → ADO ConsultaSaldoHistorial).
       * Optional `statementRequest`: `sendMail` (ADO may email history), `page` / `limit` (pagination strings per ADO).
       * Response: `statement` plus `count`, `next`, `previous` (Inventory paginated shape).
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {string} opts.walletId - Saldo Max wallet id (idWallet)
       * @param {{ sendMail?: boolean, page?: string, limit?: string }} [opts.statementRequest] -
       *   optional body (sent as `{ statementRequest }` in JSON)
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{
       *   statement: Object, count: number, next?: string, previous?: string
       * }>>}
       * @throws When response is 4xx/5xx (400 INVALID_WALLET_ID; 401; 404; 502; 503; 500)
       */
      create: ({token, jwtToken, walletId, statementRequest, headers}) => {
        return client({
          url: `/external-wallets/saldo-max/${walletId}/statements`,
          method: "post",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          data: statementRequest != null ? {statementRequest} : {}
        });
      }
    }
  };

  return {
    saldoMax
  };
}

module.exports = externalWalletsFactory;
