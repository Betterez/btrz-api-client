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
          wallet = _ref2.wallet;

      return client({
        url: "/external-wallets/saldo-max",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
        data: { wallet: wallet }
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
          wallet = _ref4.wallet;

      return client({
        url: "/external-wallets/saldo-max/" + wallet.id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
        data: { wallet: wallet }
      });
    }
  };

  return {
    saldoMax: saldoMax
  };
}

module.exports = externalWalletsFactory;