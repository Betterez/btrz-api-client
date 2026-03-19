const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for external-wallets API (btrz-api-inventory). SaldoMax external wallets only.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ saldoMax: { all: function, get: function, create: function, update: function, movements: { create: function } } }}
 */
function externalWalletsFactory({client, internalAuthTokenProvider}) {
  /** @type {{ all: function, create: function, get: function, update: function, movements: object }} */
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
    movements: {
      /**
       * PUT /external-wallets/saldo-max/:walletId/movements - add movement to wallet.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {string} opts.walletId - Wallet id
       * @param {Object} opts.movement - Movement payload (amount, type: payment|refund|manual, reason, nip)
       * @param {Object} [opts.headers] - Optional headers
       * @returns {Promise<import("axios").AxiosResponse<{ externalWallet: Object }>>}
       * @throws When response is 4xx/5xx (400, 401, 403 INVALID_NIP/WALLET_BLOCKED/WALLET_NOT_ACTIVE, 404, 500)
       */
      create: ({token, jwtToken, walletId, movement, headers}) => {
        return client({
          url: `/external-wallets/saldo-max/${walletId}/movements`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          data: {movement}
        });
      }
    }
  };

  return {
    saldoMax
  };
}

module.exports = externalWalletsFactory;
