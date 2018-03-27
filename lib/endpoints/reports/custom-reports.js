"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function customReportsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var token = _ref2.token,
        customReport = _ref2.customReport,
        jwtToken = _ref2.jwtToken;

    return client({
      url: "/custom-reports",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { customReport: customReport }
    });
  }

  return {
    create: create
  };
}

module.exports = customReportsFactory;