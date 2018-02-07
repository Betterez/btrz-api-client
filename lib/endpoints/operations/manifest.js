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

  function getOrCreate(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        query = _ref5.query;

    return get({ token: token, jwtToken: jwtToken, query: Object.assign({ createIfNotExists: true }, query) });
  }

  function patch(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        id = _ref6.id,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        operations = _ref6.operations;

    return client({
      url: "/manifests/" + id,
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { operations: operations }
    });
  }

  function update(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        providerId = _ref7.providerId,
        data = _ref7.data;

    return patch({ token: token, jwtToken: jwtToken, id: data.manifestId, query: { providerId: providerId }, operations: [{ op: "update", data: data }] });
  }

  function create(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        providerId = _ref8.providerId,
        data = _ref8.data;

    return client({
      url: "/manifests",
      method: "post",
      params: { providerId: providerId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: data
    });
  }

  return {
    find: find,
    get: get,
    getById: getById,
    getOrCreate: getOrCreate,
    patch: patch,
    update: update,
    create: create
  };
}

module.exports = manifestFactory;