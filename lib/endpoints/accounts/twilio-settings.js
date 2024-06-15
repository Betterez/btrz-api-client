"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function twilioSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/twilio-settings",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref3) {
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        twilioSettings = _ref3.twilioSettings,
        headers = _ref3.headers;

    return client({
      url: "/twilio-settings",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        twilioSettings: twilioSettings
      }
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = twilioSettingsFactory;