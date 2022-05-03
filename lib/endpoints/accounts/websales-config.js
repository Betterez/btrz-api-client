"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function websalesConfigFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      params: query,
      url: "/websales-config",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        websalesConfigId = _ref3.websalesConfigId,
        websalesConfig = _ref3.websalesConfig,
        headers = _ref3.headers;

    return client({
      url: "/websales-config/" + websalesConfigId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: websalesConfig
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = websalesConfigFactory;