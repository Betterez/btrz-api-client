"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function faresFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        id = _ref3.id;

    return client.get("/fare/" + id, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = faresFactory;