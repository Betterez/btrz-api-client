"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function seatFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function update(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        params = _ref2.params,
        headers = _ref2.headers;

    return client({
      url: "/seat",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: params
    });
  }

  return {
    update: update
  };
}

module.exports = seatFactory;