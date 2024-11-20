"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function transportRegulationSettingsForCNRT(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/transport-regulation-settings/cnrt",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        transportRegulationSettings = _ref3.transportRegulationSettings,
        headers = _ref3.headers;

    return client({
      url: "/transport-regulation-settings/cnrt",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: transportRegulationSettings
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = transportRegulationSettingsForCNRT;