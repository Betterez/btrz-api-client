"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestFactory(_ref) {
  var client = _ref.client;


  function find(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client({
      url: "/manifest",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function getById(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        manifestId = _ref4.manifestId;

    return get({ token: token, jwtToken: jwtToken, query: { manifestId: manifestId } });
  }

  function patch(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        operations = _ref5.operations;

    return client({
      url: "/manifest/" + id,
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { operations: operations }
    });
  }

  return {
    find: find,
    get: get,
    getById: getById,
    patch: patch
  };
}

module.exports = manifestFactory;