"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function stationTypeFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/station-types",
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        stationTypeId = _ref3.stationTypeId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/station-types/" + stationTypeId,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        stationTypeId = _ref4.stationTypeId,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/station-types/" + stationTypeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function remove(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        stationTypeId = _ref5.stationTypeId,
        headers = _ref5.headers;

    return client({
      url: "/station-types/" + stationTypeId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        data = _ref6.data,
        headers = _ref6.headers;

    return client({
      url: "/station-types",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
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

module.exports = stationTypeFactory;