"use strict";

/* eslint-disable import/extensions */
var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function exchangeReceiptsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function update(_ref2) {
    var data = _ref2.data,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/exchange-receipt-settings",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    update: update
  };
}

module.exports = exchangeReceiptsFactory;