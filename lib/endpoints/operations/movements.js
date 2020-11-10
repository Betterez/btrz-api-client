"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function movementsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        movement = _ref2.movement,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/movements",
      method: "post",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: movement
    });
  }

  return {
    create: create
  };
}

module.exports = movementsFactory;