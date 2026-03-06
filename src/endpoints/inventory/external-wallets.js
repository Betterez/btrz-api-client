const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for external-wallets API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ saldoMax: object }}
 */
function externalWalletsFactory({client, internalAuthTokenProvider}) {
  /** @type {{ all: function, create: function, get: function, update: function, movements: object }} */
  const saldoMax = {
    /**
     * GET /external-wallets/saldo-max - list saldo max wallets. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: ({token, jwtToken, query = {}, headers}) => {
      return client.get("/external-wallets/saldo-max", {
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
      });
    },
    /**
     * POST /external-wallets/saldo-max - create saldo max wallet. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.externalWallet - External wallet payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
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
     * GET /external-wallets/saldo-max/:walletId - get saldo max wallet. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.walletId - Wallet id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: ({token, jwtToken, walletId, headers}) => {
      return client.get(`/external-wallets/saldo-max/${walletId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    /**
     * PUT /external-wallets/saldo-max/:externalWallet._id - update saldo max wallet. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.externalWallet - External wallet payload (must include _id)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
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
    /** @type {{ create: function }} */
    movements: {
      /**
       * PUT /external-wallets/saldo-max/:walletId/movements - create movement. API does not accept query params.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {string} opts.walletId - Wallet id
       * @param {Object} opts.movement - Movement payload
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      create: ({token, jwtToken, walletId, movement}) => {
        return client({
          url: `/external-wallets/saldo-max/${walletId}/movements`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
          data: {
            movement
          }
        });
      }
    }
  };

  return {
    saldoMax
  };
}

module.exports = externalWalletsFactory;
