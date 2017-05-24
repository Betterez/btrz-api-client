"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function lexiconsFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token,
        context = _ref2.context;


    return client({
      url: "lexicons/buscompany",
      params: { context: context },
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    all: all
  };
}

module.exports = lexiconsFactory;