"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function reportTypesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers;

    return client({
      url: "/types/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getByName(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        name = _ref3.name,
        headers = _ref3.headers;
    //deprecated
    return client({
      url: "/types?name=" + name,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get,
    getByName: getByName
  };
}

module.exports = reportTypesFactory;