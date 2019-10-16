"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function webhooksFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function emit(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        webhook = _ref2.webhook;

    return client({
      url: "/emit",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: webhook
    });
  }

  return {
    emit: emit
  };
}

module.exports = webhooksFactory;