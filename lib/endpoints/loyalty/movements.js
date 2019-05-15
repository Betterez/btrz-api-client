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
        movement = _ref3.movement,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client({
      url: "/programs/" + programId + "/movements",
      method: "post",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: movement
    });
  }

  var balance = {
    get: function get(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          programId = _ref4.programId,
          customerId = _ref4.customerId,
          _ref4$query = _ref4.query,
          query = _ref4$query === undefined ? {} : _ref4$query;

      return client({
        url: "/programs/" + programId + "/movements/balance/" + customerId,
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
      });
    }
  };

  return {
    all: all,
    create: create,
    balance: balance
  };
}

module.exports = movementsFactory;