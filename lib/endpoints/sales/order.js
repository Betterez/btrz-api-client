"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function orderFactory(_ref) {
  var client = _ref.client;


  function create(_ref2) {
    var token = _ref2.token,
        order = _ref2.order,
        jwtToken = _ref2.jwtToken;

    return client({
      url: "/order",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: order
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        orderId = _ref3.orderId;

    return client({
      url: "/order/" + orderId,
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    create: create,
    get: get
  };
}

module.exports = orderFactory;