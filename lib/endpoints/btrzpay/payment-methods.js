"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function paymentMethodsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function getByProviderName(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        providerName = _ref2.providerName;
    //deprecated
    return client({
      url: "/payment-methods?providerName=" + providerName,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    getByProviderName: getByProviderName
  };
}

module.exports = paymentMethodsFactory;