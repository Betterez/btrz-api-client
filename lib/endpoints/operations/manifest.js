"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function dispatch(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers,
        manifestId = _ref2.manifestId,
        data = _ref2.data;

    return client({
      url: "manifests/" + manifestId + "/dispatches",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getById(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        manifestId = _ref4.manifestId,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      url: "/manifests/" + manifestId,
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function getAll(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        providerId = _ref5.providerId,
        data = _ref5.data,
        headers = _ref5.headers;

    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/all-manifests",
      method: "post",
      params: { providerId: providerId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function outlook(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        headers = _ref6.headers;

    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function patch(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        _ref7$query = _ref7.query,
        query = _ref7$query === undefined ? {} : _ref7$query,
        operations = _ref7.operations,
        headers = _ref7.headers;

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

  function save(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        providerId = _ref8.providerId,
        data = _ref8.data,
        headers = _ref8.headers;

    return client({
      url: "/manifests",
      method: "put",
      params: { providerId: providerId, manifestId: data.manifestId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function addUser(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        manifestId = _ref9.manifestId,
        _ref9$query = _ref9.query,
        query = _ref9$query === undefined ? {} : _ref9$query,
        data = _ref9.data,
        headers = _ref9.headers;

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

  function removeUser(_ref10) {
    var token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        manifestId = _ref10.manifestId,
        userId = _ref10.userId,
        headers = _ref10.headers;

    return client({
      url: "/manifests/" + manifestId + "/users/" + userId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function addCapacityException(_ref11) {
    var token = _ref11.token,
        jwtToken = _ref11.jwtToken,
        manifestId = _ref11.manifestId,
        _ref11$query = _ref11.query,
        query = _ref11$query === undefined ? {} : _ref11$query,
        data = _ref11.data,
        headers = _ref11.headers;

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

  function removeCapacityException(_ref12) {
    var token = _ref12.token,
        jwtToken = _ref12.jwtToken,
        manifestId = _ref12.manifestId,
        exceptionId = _ref12.exceptionId,
        headers = _ref12.headers;

    return client({
      url: "/manifests/" + manifestId + "/capacity-exceptions/" + exceptionId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function updateComment(_ref13) {
    var token = _ref13.token,
        jwtToken = _ref13.jwtToken,
        manifestId = _ref13.manifestId,
        _ref13$query = _ref13.query,
        query = _ref13$query === undefined ? {} : _ref13$query,
        data = _ref13.data,
        headers = _ref13.headers;

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

  function updateStatus(_ref14) {
    var token = _ref14.token,
        jwtToken = _ref14.jwtToken,
        manifestId = _ref14.manifestId,
        _ref14$query = _ref14.query,
        query = _ref14$query === undefined ? {} : _ref14$query,
        data = _ref14.data,
        headers = _ref14.headers;

    return client({
      url: "/manifests/" + manifestId + "/status",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      params: query,
      data: data
    });
  }

  var checkIn = {
    create: function create(_ref15) {
      var token = _ref15.token,
          jwtToken = _ref15.jwtToken,
          _ref15$query = _ref15.query,
          query = _ref15$query === undefined ? {} : _ref15$query,
          headers = _ref15.headers,
          data = _ref15.data,
          manifestId = _ref15.manifestId,
          legFromId = _ref15.legFromId;

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
    open: function open(_ref16) {
      var token = _ref16.token,
          jwtToken = _ref16.jwtToken,
          _ref16$query = _ref16.query,
          query = _ref16$query === undefined ? {} : _ref16$query,
          headers = _ref16.headers,
          manifestId = _ref16.manifestId,
          legFromId = _ref16.legFromId;

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
    close: function close(_ref17) {
      var token = _ref17.token,
          jwtToken = _ref17.jwtToken,
          _ref17$query = _ref17.query,
          query = _ref17$query === undefined ? {} : _ref17$query,
          headers = _ref17.headers,
          manifestId = _ref17.manifestId,
          legFromId = _ref17.legFromId;

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

  var legs = {
    update: function update(_ref18) {
      var token = _ref18.token,
          jwtToken = _ref18.jwtToken,
          data = _ref18.data,
          _ref18$query = _ref18.query,
          query = _ref18$query === undefined ? {} : _ref18$query,
          headers = _ref18.headers,
          manifestId = _ref18.manifestId,
          legFromId = _ref18.legFromId;

      return client({
        url: "/manifests/" + manifestId + "/legs/" + legFromId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: data
      });
    },

    tickets: {
      update: function update(_ref19) {
        var token = _ref19.token,
            jwtToken = _ref19.jwtToken,
            data = _ref19.data,
            _ref19$query = _ref19.query,
            query = _ref19$query === undefined ? {} : _ref19$query,
            headers = _ref19.headers,
            manifestId = _ref19.manifestId,
            legFromId = _ref19.legFromId,
            ticketId = _ref19.ticketId;

        return client({
          url: "/manifests/" + manifestId + "/legs/" + legFromId + "/tickets/" + ticketId,
          method: "put",
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
          params: query,
          data: data
        });
      },
      noshow: function noshow(_ref20) {
        var token = _ref20.token,
            jwtToken = _ref20.jwtToken,
            _ref20$query = _ref20.query,
            query = _ref20$query === undefined ? {} : _ref20$query,
            headers = _ref20.headers,
            manifestId = _ref20.manifestId,
            legFromId = _ref20.legFromId,
            ticketId = _ref20.ticketId;

        return client({
          url: "/manifests/" + manifestId + "/legs/" + legFromId + "/tickets/" + ticketId + "/noshow",
          method: "put",
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
          params: query
        });
      }
    }
  };

  var reports = {
    get: function get(_ref21) {
      var token = _ref21.token,
          jwtToken = _ref21.jwtToken,
          _ref21$query = _ref21.query,
          query = _ref21$query === undefined ? {} : _ref21$query,
          _ref21$responseType = _ref21.responseType,
          responseType = _ref21$responseType === undefined ? "json" : _ref21$responseType,
          id = _ref21.id,
          headers = _ref21.headers;

      return client({
        url: "/manifests/" + id + "/reports",
        method: "get",
        responseType: responseType,
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    updateStatus: updateStatus,
    addCapacityException: addCapacityException,
    removeCapacityException: removeCapacityException,
    dispatch: dispatch,
    checkIn: checkIn,
    legs: legs,
    reports: reports
  };
}

module.exports = manifestFactory;