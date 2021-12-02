"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function squareWebhooksFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        data = _ref2.data,
        providerId = _ref2.providerId,
        headers = _ref2.headers;

    return client({
      url: "/square-webhooks/" + providerId,
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    create: create
  };
}

function squareTerminalsFactory(_ref3) {
  var client = _ref3.client,
      internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

  function get(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client.get("/square-terminals", {
      params: {},
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    get: get
  };
}
module.exports = {
  squareWebhooksFactory: squareWebhooksFactory,
  squareTerminalsFactory: squareTerminalsFactory
};