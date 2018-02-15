"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function customersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function put(_ref2) {
    var customerId = _ref2.customerId,
        customer = _ref2.customer,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken;

    return client({
      url: "/customers/" + customerId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: customer
    });
  }

  return {
    put: put
  };
}

module.exports = customersFactory;