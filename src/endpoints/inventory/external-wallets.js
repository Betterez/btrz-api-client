const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function externalWalletsFactory({client, internalAuthTokenProvider}) {
  const saldoMax = {
    create: ({token, jwtToken, wallet}) => {
      return client({
        url: "/external-wallets/saldo-max",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
        data: {wallet}
      });
    },
    get: ({token, jwtToken, walletId}) => {
      return client.get(`/external-wallets/saldo-max/${walletId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
      });
    },
    update: ({token, jwtToken, wallet}) => {
      return client({
        url: `/external-wallets/saldo-max/${wallet.id}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
        data: {wallet}
      });
    }
  };

  return {
    saldoMax
  };
}

module.exports = externalWalletsFactory;
