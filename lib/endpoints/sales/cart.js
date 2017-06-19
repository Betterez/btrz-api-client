"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function cartFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        id = _ref2.id;

    return client({
      url: "/cart/" + id,
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    get: get
  };
}

module.exports = cartFactory;