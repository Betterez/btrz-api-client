"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function reportEmailFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function post(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        report = _ref2.report,
        headers = _ref2.headers;

    return client({
      url: "/reports/email",
      method: "post",
      data: report,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }
  return {
    post: post
  };
}

module.exports = reportEmailFactory;