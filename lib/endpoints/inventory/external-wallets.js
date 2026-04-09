"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
 *     nip: object, authorization: { create: function }, movements: { create: function }
 *   }
 * }}
 */


function externalWalletsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * @type {{
   *   all: function, create: function, get: function, update: function,
   *   nip: object, authorization: { create: function }, movements: object
   * }}
   */
  var saldoMax = {
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
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client.get("/external-wallets/saldo-max", {
        params: query,
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
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
    create: function create(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          externalWallet = _ref3.externalWallet,
          headers = _ref3.headers;

      return client({
        url: "/external-wallets/saldo-max",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { externalWallet: externalWallet }
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
    get: function get(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          walletId = _ref4.walletId,
          headers = _ref4.headers;

      return client.get("/external-wallets/saldo-max/" + walletId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    update: function update(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          externalWallet = _ref5.externalWallet,
          headers = _ref5.headers;

      var externalWalletFieldsToUpdate = {
        nip: externalWallet.nip,
        walletNumber: externalWallet.walletNumber,
        status: externalWallet.status
      };

      return client({
        url: "/external-wallets/saldo-max/" + externalWallet._id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
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
      update: function update(_ref6) {
        var token = _ref6.token,
            jwtToken = _ref6.jwtToken,
            walletId = _ref6.walletId,
            nip = _ref6.nip,
            headers = _ref6.headers;

        return client({
          url: "/external-wallets/saldo-max/" + walletId + "/nip",
          method: "put",
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
          data: {
            nip: nip
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
      create: function create(_ref7) {
        var token = _ref7.token,
            jwtToken = _ref7.jwtToken,
            walletId = _ref7.walletId,
            nip = _ref7.nip,
            nipAuthorization = _ref7.nipAuthorization,
            headers = _ref7.headers;

        var data = nipAuthorization != null ? { nipAuthorization: nipAuthorization } : { nip: nip };
        return client({
          url: "/external-wallets/saldo-max/" + walletId + "/authorization",
          method: "post",
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
          data: data
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
      create: function create(_ref8) {
        var token = _ref8.token,
            jwtToken = _ref8.jwtToken,
            walletId = _ref8.walletId,
            movement = _ref8.movement,
            headers = _ref8.headers;

        return client({
          url: "/external-wallets/saldo-max/" + walletId + "/movements",
          method: "put",
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
          data: { movement: movement }
        });
      }
    }
  };

  return {
    saldoMax: saldoMax
  };
}

module.exports = externalWalletsFactory;