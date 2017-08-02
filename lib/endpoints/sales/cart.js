"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function cartFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        id = _ref2.id,
        providerId = _ref2.providerId;

    var url = "/cart/" + id;

    if (providerId) {
      url = url + "?providerId=" + providerId;
    }

    return client({
      url: url,
      headers: authorizationHeaders({ token: token })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        cart = _ref3.cart,
        jwtToken = _ref3.jwtToken;

    return client({
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: cart
    });
  }

  return {
    get: get,
    create: create
  };
}

module.exports = cartFactory;