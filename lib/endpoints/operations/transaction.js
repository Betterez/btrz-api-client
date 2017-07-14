"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function transactionFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        providerId = _ref2.providerId;

    return client({
      url: "/transaction/" + id + "?providerId=" + providerId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  return {
    get: get
  };
}

module.exports = transactionFactory;