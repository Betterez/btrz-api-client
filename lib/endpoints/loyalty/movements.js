"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function movementsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        programId = _ref2.programId,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/programs/" + programId + "/movements",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        programId = _ref3.programId,
        movement = _ref3.movement;

    return client({
      url: "/programs/" + programId + "/movements",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: movement
    });
  }

  return {
    all: all,
    create: create
  };
}

module.exports = movementsFactory;