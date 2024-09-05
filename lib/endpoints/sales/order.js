"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function orderFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var token = _ref2.token,
        order = _ref2.order,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/order",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: order
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        orderId = _ref3.orderId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/order/" + orderId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function overwrite(_ref4) {
    var token = _ref4.token,
        orderId = _ref4.orderId,
        payments = _ref4.payments,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/orders/" + orderId + "/payments",
      method: "post",
      data: payments,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    create: create,
    get: get,
    overwrite: overwrite
  };
}

module.exports = orderFactory;