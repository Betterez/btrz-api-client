"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function providersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/providers",
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client({
      url: "/providers/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        data = _ref4.data,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query;

    return client({
      url: "/providers/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query,
      data: data
    });
  }

  function remove(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query;

    return client({
      url: "/providers/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  function create(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        data = _ref6.data,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query;

    return client({
      url: "/providers",
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

module.exports = providersFactory;