"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestNotificationsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        data = _ref2.data;

    return client({
      url: "/manifest-notifications",
      method: "post",
      params: query,
      data: data,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client.get("/manifest-notifications", {
      params: query,
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider
      })
    });
  }

  return {
    create: create,
    all: all
  };
}

module.exports = manifestNotificationsFactory;