"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function goalSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/goal-settings",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref3) {
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        goalSettings = _ref3.goalSettings,
        headers = _ref3.headers;

    return client({
      url: "/goal-settings",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        goalSettings: goalSettings
      }
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = goalSettingsFactory;