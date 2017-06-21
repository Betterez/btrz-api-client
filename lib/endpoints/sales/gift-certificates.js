"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function giftCertificatesFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        GCNumber = _ref2.GCNumber;

    return client({
      url: "/gift-certificates/" + GCNumber,
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    get: get
  };
}

module.exports = giftCertificatesFactory;