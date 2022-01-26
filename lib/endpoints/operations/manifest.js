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

  function addCapacityException(_ref10) {
    var token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        manifestId = _ref10.manifestId,
        _ref10$query = _ref10.query,
        query = _ref10$query === undefined ? {} : _ref10$query,
        data = _ref10.data,
        headers = _ref10.headers;

    return client({
      url: "/manifests/" + manifestId + "/capacity-exceptions",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: data
    });
  }

  function removeCapacityException(_ref11) {
    var token = _ref11.token,
        jwtToken = _ref11.jwtToken,
        manifestId = _ref11.manifestId,
        exceptionId = _ref11.exceptionId,
        headers = _ref11.headers;

    return client({
      url: "/manifests/" + manifestId + "/capacity-exceptions/" + exceptionId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function updateComment(_ref12) {
    var token = _ref12.token,
        jwtToken = _ref12.jwtToken,
        manifestId = _ref12.manifestId,
        _ref12$query = _ref12.query,
        query = _ref12$query === undefined ? {} : _ref12$query,
        data = _ref12.data,
        headers = _ref12.headers;

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

  var checkIn = {
    create: function create(_ref13) {
      var token = _ref13.token,
          jwtToken = _ref13.jwtToken,
          _ref13$query = _ref13.query,
          query = _ref13$query === undefined ? {} : _ref13$query,
          headers = _ref13.headers,
          data = _ref13.data,
          manifestId = _ref13.manifestId,
          legFromId = _ref13.legFromId;

      return client({
        url: "/manifests/" + manifestId + "/checkin/" + legFromId,
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query,
        data: data
      });
    },
    open: function open(_ref14) {
      var token = _ref14.token,
          jwtToken = _ref14.jwtToken,
          _ref14$query = _ref14.query,
          query = _ref14$query === undefined ? {} : _ref14$query,
          headers = _ref14.headers,
          manifestId = _ref14.manifestId,
          legFromId = _ref14.legFromId;

      return client({
        url: "/manifests/" + manifestId + "/checkin/" + legFromId,
        method: "patch",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query,
        data: {
          operation: {
            name: "open_check_in"
          }
        }
      });
    },
    close: function close(_ref15) {
      var token = _ref15.token,
          jwtToken = _ref15.jwtToken,
          _ref15$query = _ref15.query,
          query = _ref15$query === undefined ? {} : _ref15$query,
          headers = _ref15.headers,
          manifestId = _ref15.manifestId,
          legFromId = _ref15.legFromId;

      return client({
        url: "/manifests/" + manifestId + "/checkin/" + legFromId,
        method: "patch",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        params: query,
        data: {
          operation: {
            name: "close_check_in"
          }
        }
      });
    }
  };

  return {
    get: get,
    getAll: getAll,
    getById: getById,
    outlook: outlook,
    patch: patch,
    save: save,
    addUser: addUser,
    removeUser: removeUser,
    updateComment: updateComment,
    addCapacityException: addCapacityException,
    removeCapacityException: removeCapacityException,
    checkIn: checkIn
  };
}

module.exports = manifestFactory;