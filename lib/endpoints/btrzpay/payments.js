"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function paymentsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        payments = _ref2.payments,
        headers = _ref2.headers;

    return client({
      url: "/payments",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { payments: payments }
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        transactionId = _ref3.transactionId,
        headers = _ref3.headers;

    return client.get("/transactions/" + transactionId, {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    create: create,
    get: get
  };
}

module.exports = paymentsFactory;