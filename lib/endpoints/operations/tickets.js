"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function ticketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function patch(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        operations = _ref2.operations,
        warningsEnabled = _ref2.warningsEnabled;

    return client({
      url: "/tickets/" + id,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { operations: operations, warningsEnabled: warningsEnabled }
    });
  }

  return {
    patch: patch
  };
}

module.exports = ticketsFactory;