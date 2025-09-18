const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function externalWalletsFactory({client, internalAuthTokenProvider}) {
  const saldoMax = {
    all: ({token, jwtToken, query = {}, headers}) => {
      return client.get("/external-wallets/saldo-max", {
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
      });
    },
    create: ({token, jwtToken, externalWallet, headers}) => {
      return client({
        url: "/external-wallets/saldo-max",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {externalWallet}
      });
    },
    get: ({token, jwtToken, walletId, headers}) => {
      return client.get(`/external-wallets/saldo-max/${walletId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
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
    }
  };

  return {
    saldoMax
  };
}

module.exports = externalWalletsFactory;
