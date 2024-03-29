"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function applicationsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        id = _ref2.id,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client.get("/applications/" + id, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }
  function getByName(_ref3) {
    var token = _ref3.token,
        appName = _ref3.appName,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client.get("/applications/name/" + appName, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get,
    getByName: getByName
  };
}

module.exports = applicationsFactory;