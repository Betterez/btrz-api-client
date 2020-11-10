"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function tripChangeInfoFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        productId = _ref2.productId,
        params = _ref2.params;

    return client({
      url: "/trip-change-info/" + productId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: params
    });
  }

  return {
    get: get
  };
}

module.exports = tripChangeInfoFactory;