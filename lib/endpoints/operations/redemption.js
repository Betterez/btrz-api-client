"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function redemptionFactory(_ref) {
  var client = _ref.client;


  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        redemption = _ref2.redemption;

    return client({
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: redemption
    });
  }

  return {
    create: create
  };
}

module.exports = redemptionFactory;