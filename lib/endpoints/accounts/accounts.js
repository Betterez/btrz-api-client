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

  var defaultUsers = {
    create: function create(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          accountId = _ref3.accountId,
          data = _ref3.data,
          headers = _ref3.headers;

      return client({
        url: "/accounts/" + accountId + "/default-users",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    get: get,
    defaultUsers: defaultUsers
  };
}

module.exports = accountsFactory;