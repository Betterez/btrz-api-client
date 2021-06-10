"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function scheduledNotificationsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query;

    return client({
      url: "/scheduled-notifications",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id;

    return client({
      url: "/scheduled-notifications/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        data = _ref4.data;

    return client({
      url: "/scheduled-notifications/" + id,
      method: "put",
      params: data,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  function remove(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id;

    return client({
      url: "/scheduled-notifications/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        data = _ref6.data;

    return client({
      url: "/scheduled-notifications",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query,
      data: data
    });
  }

  return {
    all: all,
    get: get,
    update: update,
    remove: remove,
    create: create
  };
}

module.exports = scheduledNotificationsFactory;