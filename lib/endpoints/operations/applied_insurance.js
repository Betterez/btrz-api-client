"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

var querystring = require("querystring");

function appliedInsuranceFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        trxId = _ref2.trxId;

    var query = { trxId: trxId };

    return client({
      url: "/appliedInsurances",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  return { all: all };
}

module.exports = appliedInsuranceFactory;