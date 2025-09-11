const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function externalWalletsFactory({client, internalAuthTokenProvider}) {
  const saldoMax = {
    create: ({token, jwtToken, externalWallet}) => {
      return client({
        url: "/external-wallets/saldo-max",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
        data: {externalWallet}
      });
    },
    get: ({token, jwtToken, walletId}) => {
      return client.get(`/external-wallets/saldo-max/${walletId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
      });
    },
    update: ({token, jwtToken, externalWallet}) => {
      const externalWalletFieldsToUpdate = {
        nip: externalWallet.nip,
        walletNumber: externalWallet.walletNumber,
        status: externalWallet.status
      };

      return client({
        url: `/external-wallets/saldo-max/${externalWallet._id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
