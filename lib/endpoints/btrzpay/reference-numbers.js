"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function referenceNumbersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        referenceNumberRequest = _ref2.referenceNumberRequest;

    return client({
      url: "/reference-numbers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { referenceNumberRequest: referenceNumberRequest }
    });
  }

  return {
    create: create
  };
}

module.exports = referenceNumbersFactory;