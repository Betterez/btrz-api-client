"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getById(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        manifestId = _ref3.manifestId,
        headers = _ref3.headers;

    return client({
      url: "/manifests/" + manifestId,
      method: "get",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function getAll(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        providerId = _ref4.providerId,
        data = _ref4.data,
        headers = _ref4.headers;

    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/all-manifests",
      method: "post",
      params: { providerId: providerId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function outlook(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        headers = _ref5.headers;

    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function patch(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        operations = _ref6.operations,
        headers = _ref6.headers;

    return client({
      url: "/manifests",
      method: "patch",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        operations: operations
      }
    });
  }

  function save(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        providerId = _ref7.providerId,
        data = _ref7.data,
        headers = _ref7.headers;

    return client({
      url: "/manifests",
      method: "put",
      params: { providerId: providerId, manifestId: data.manifestId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function addUser(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        manifestId = _ref8.manifestId,
        _ref8$query = _ref8.query,
        query = _ref8$query === undefined ? {} : _ref8$query,
        data = _ref8.data,
        headers = _ref8.headers;

    return client({
      url: "/manifests/" + manifestId + "/users",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: data
    });
  }

  function removeUser(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        manifestId = _ref9.manifestId,
        userId = _ref9.userId,
        headers = _ref9.headers;

    return client({
      url: "/manifests/" + manifestId + "/users/" + userId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function updateComment(_ref10) {
    var token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        manifestId = _ref10.manifestId,
        _ref10$query = _ref10.query,
        query = _ref10$query === undefined ? {} : _ref10$query,
        data = _ref10.data,
        headers = _ref10.headers;

    return client({
      url: "/manifests/" + manifestId + "/comments",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: data
    });
  }

  return {
    get: get,
    getAll: getAll,
    getById: getById,
    outlook: outlook,
    patch: patch,
    save: save,
    addUser: addUser,
    removeUser: removeUser,
    updateComment: updateComment
  };
}

module.exports = manifestFactory;