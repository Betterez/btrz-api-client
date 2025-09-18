"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function externalWalletsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var saldoMax = {
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
    get: function get(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          walletId = _ref4.walletId,
          headers = _ref4.headers;

      return client.get("/external-wallets/saldo-max/" + walletId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
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
    movements: {
      create: function create(_ref6) {
        var token = _ref6.token,
            jwtToken = _ref6.jwtToken,
            walletId = _ref6.walletId,
            movement = _ref6.movement;

        return client({
          url: "/external-wallets/saldo-max/" + walletId + "/movements",
          method: "put",
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
          data: {
            movement: movement
          }
        });
      }
    }
  };

  return {
    saldoMax: saldoMax
  };
}

module.exports = externalWalletsFactory;