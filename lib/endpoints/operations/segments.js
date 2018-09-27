"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function segmentsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        productId = _ref2.productId,
        ticketId = _ref2.ticketId,
        providerId = _ref2.providerId;

    return client({
      url: "/products/" + productId + "/segments/" + ticketId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: {
        providerId: providerId
      }
    });
  }

  return {
    all: all
  };
}

module.exports = segmentsFactory;