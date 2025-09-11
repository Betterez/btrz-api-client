"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function externalWalletsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var saldoMax = {
    create: function create(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          externalWallet = _ref2.externalWallet;

      return client({
        url: "/external-wallets/saldo-max",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
        data: { externalWallet: externalWallet }
      });
    },
    get: function get(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          walletId = _ref3.walletId;

      return client.get("/external-wallets/saldo-max/" + walletId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
      });
    },
    update: function update(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          externalWallet = _ref4.externalWallet;

      var externalWalletFieldsToUpdate = {
        nip: externalWallet.nip,
        walletNumber: externalWallet.walletNumber,
        status: externalWallet.status
      };

      return client({
        url: "/external-wallets/saldo-max/" + externalWallet._id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
        data: {
          externalWallet: externalWalletFieldsToUpdate
        }
      });
    }
  };

  return {
    saldoMax: saldoMax
  };
}

module.exports = externalWalletsFactory;