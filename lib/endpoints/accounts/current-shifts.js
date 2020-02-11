"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function currentShiftsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        userId = _ref2.userId,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/users/" + userId + "/current-shift", {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  return {
    get: get
  };
}

module.exports = currentShiftsFactory;