"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function printSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/print-settings",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref3) {
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        printSettings = _ref3.printSettings,
        headers = _ref3.headers;

    return client({
      url: "/print-settings",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        printSettings: printSettings
      }
    });
  }

  return {
    all: all,
    update: update
  };
}

module.exports = printSettingsFactory;