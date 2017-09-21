"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/manifest",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function patch(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        operations = _ref3.operations;

    return client({
      url: "/manifest/" + id,
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { operations: operations }
    });
  }

  return {
    get: get,
    patch: patch
  };
}

module.exports = manifestFactory;