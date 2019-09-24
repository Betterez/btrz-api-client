"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function syncEntryFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function patch(_ref2) {
    var token = _ref2.token,
        data = _ref2.data,
        jwtToken = _ref2.jwtToken;

    return client({
      url: "/sync-entry",
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  return {
    patch: patch
  };
}

module.exports = syncEntryFactory;