"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function cartFactory(_ref) {
  var client = _ref.client;


  function create(_ref2) {
    var token = _ref2.token,
        insurance = _ref2.insurance,
        jwtToken = _ref2.jwtToken;

    return client({
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { insurance: insurance }
    });
  }

  return {
    create: create
  };
}

module.exports = cartFactory;