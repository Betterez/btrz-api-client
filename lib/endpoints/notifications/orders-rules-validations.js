"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function ordersRulesValidations(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        orderRulesValidation = _ref2.orderRulesValidation,
        headers = _ref2.headers;

    return client({
      url: "/orders-rules-validations",
      method: "post",
      params: query,
      orderRulesValidation: orderRulesValidation,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }
  return {
    create: create
  };
}

module.exports = ordersRulesValidations;