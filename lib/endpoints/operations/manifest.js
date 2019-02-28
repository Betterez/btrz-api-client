"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function getById(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        manifestId = _ref3.manifestId;

    return client({
      url: "/manifests/" + manifestId,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function getMany(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        providerId = _ref4.providerId,
        data = _ref4.data;

    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/manifests",
      method: "post",
      params: { providerId: providerId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  function outlook(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query;

    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function patch(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        operations = _ref6.operations;

    return client({
      url: "/manifests",
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { operations: operations }
    });
  }

  function save(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        providerId = _ref7.providerId,
        data = _ref7.data;

    return client({
      url: "/manifests",
      method: "put",
      params: { providerId: providerId, manifestId: data.manifestId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  return {
    get: get,
    getById: getById,
    getMany: getMany,
    outlook: outlook,
    patch: patch,
    save: save
  };
}

module.exports = manifestFactory;