"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function accountsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var jwtToken = _ref2.jwtToken,
        accountId = _ref2.accountId,
        headers = _ref2.headers;

    return client({
      url: "/accounts/" + accountId,
      headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = accountsFactory;