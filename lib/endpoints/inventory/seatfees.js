"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function seatfeesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/seat-fees", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var seatfeeId = _ref3.seatfeeId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/seat-fees/" + seatfeeId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        seatfee = _ref4.seatfee,
        headers = _ref4.headers;

    return client({
      url: "/seat-fees",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatfee: seatfee
      }
    });
  }

  function update(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        seatfeeId = _ref5.seatfeeId,
        seatfee = _ref5.seatfee,
        headers = _ref5.headers;

    return client({
      url: "/seat-fees/" + seatfeeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatfee: seatfee
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = seatfeesFactory;