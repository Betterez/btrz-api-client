"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function manifestFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function createDispatchReporting(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers,
        data = _ref2.data;

    return client({
      url: "/manifests/dispatch/reporting",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function updateDispatchReporting(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers,
        manifestId = _ref3.manifestId,
        data = _ref3.data;

    return client({
      url: "manifests/" + manifestId + "/dispatch/reporting",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function dispatch(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers,
        manifestId = _ref4.manifestId,
        data = _ref4.data,
        query = _ref4.query;

    return client({
      url: "manifests/" + manifestId + "/dispatches",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data,
      params: query
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query,
        headers = _ref5.headers;

    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getById(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        manifestId = _ref6.manifestId,
        _ref6$query = _ref6.query,
        query = _ref6$query === undefined ? {} : _ref6$query,
        headers = _ref6.headers;

    return client({
      url: "/manifests/" + manifestId,
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function getAll(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        providerId = _ref7.providerId,
        data = _ref7.data,
        headers = _ref7.headers;

    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/all-manifests",
      method: "post",
      params: { providerId: providerId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function outlook(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        _ref8$query = _ref8.query,
        query = _ref8$query === undefined ? {} : _ref8$query,
        headers = _ref8.headers;

    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function patch(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        _ref9$query = _ref9.query,
        query = _ref9$query === undefined ? {} : _ref9$query,
        operations = _ref9.operations,
        headers = _ref9.headers;

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

  function save(_ref10) {
    var token = _ref10.token,
        jwtToken = _ref10.jwtToken,
        providerId = _ref10.providerId,
        data = _ref10.data,
        headers = _ref10.headers;

    return client({
      url: "/manifests",
      method: "put",
      params: { providerId: providerId, manifestId: data.manifestId },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function addUser(_ref11) {
    var token = _ref11.token,
        jwtToken = _ref11.jwtToken,
        manifestId = _ref11.manifestId,
        _ref11$query = _ref11.query,
        query = _ref11$query === undefined ? {} : _ref11$query,
        data = _ref11.data,
        headers = _ref11.headers;

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

  function removeUser(_ref12) {
    var token = _ref12.token,
        jwtToken = _ref12.jwtToken,
        manifestId = _ref12.manifestId,
        userId = _ref12.userId,
        headers = _ref12.headers;

    return client({
      url: "/manifests/" + manifestId + "/users/" + userId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function addCapacityException(_ref13) {
    var token = _ref13.token,
        jwtToken = _ref13.jwtToken,
        manifestId = _ref13.manifestId,
        _ref13$query = _ref13.query,
        query = _ref13$query === undefined ? {} : _ref13$query,
        data = _ref13.data,
        headers = _ref13.headers;

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

  function removeCapacityException(_ref14) {
    var token = _ref14.token,
        jwtToken = _ref14.jwtToken,
        manifestId = _ref14.manifestId,
        exceptionId = _ref14.exceptionId,
        headers = _ref14.headers;

    return client({
      url: "/manifests/" + manifestId + "/capacity-exceptions/" + exceptionId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function updateComment(_ref15) {
    var token = _ref15.token,
        jwtToken = _ref15.jwtToken,
        manifestId = _ref15.manifestId,
        _ref15$query = _ref15.query,
        query = _ref15$query === undefined ? {} : _ref15$query,
        data = _ref15.data,
        headers = _ref15.headers;

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

  function updateStatus(_ref16) {
    var token = _ref16.token,
        jwtToken = _ref16.jwtToken,
        manifestId = _ref16.manifestId,
        _ref16$query = _ref16.query,
        query = _ref16$query === undefined ? {} : _ref16$query,
        data = _ref16.data,
        headers = _ref16.headers;

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
    create: function create(_ref17) {
      var token = _ref17.token,
          jwtToken = _ref17.jwtToken,
          _ref17$query = _ref17.query,
          query = _ref17$query === undefined ? {} : _ref17$query,
          headers = _ref17.headers,
          data = _ref17.data,
          manifestId = _ref17.manifestId,
          legFromId = _ref17.legFromId;

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
    open: function open(_ref18) {
      var token = _ref18.token,
          jwtToken = _ref18.jwtToken,
          _ref18$query = _ref18.query,
          query = _ref18$query === undefined ? {} : _ref18$query,
          headers = _ref18.headers,
          manifestId = _ref18.manifestId,
          legFromId = _ref18.legFromId;

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
    close: function close(_ref19) {
      var token = _ref19.token,
          jwtToken = _ref19.jwtToken,
          _ref19$query = _ref19.query,
          query = _ref19$query === undefined ? {} : _ref19$query,
          headers = _ref19.headers,
          manifestId = _ref19.manifestId,
          legFromId = _ref19.legFromId;

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
    update: function update(_ref20) {
      var token = _ref20.token,
          jwtToken = _ref20.jwtToken,
          data = _ref20.data,
          _ref20$query = _ref20.query,
          query = _ref20$query === undefined ? {} : _ref20$query,
          headers = _ref20.headers,
          manifestId = _ref20.manifestId,
          legFromId = _ref20.legFromId;

      return client({
        url: "/manifests/" + manifestId + "/legs/" + legFromId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: data
      });
    },

    tickets: {
      update: function update(_ref21) {
        var token = _ref21.token,
            jwtToken = _ref21.jwtToken,
            data = _ref21.data,
            _ref21$query = _ref21.query,
            query = _ref21$query === undefined ? {} : _ref21$query,
            headers = _ref21.headers,
            manifestId = _ref21.manifestId,
            legFromId = _ref21.legFromId,
            ticketId = _ref21.ticketId;

        return client({
          url: "/manifests/" + manifestId + "/legs/" + legFromId + "/tickets/" + ticketId,
          method: "put",
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
          params: query,
          data: data
        });
      },
      noshow: function noshow(_ref22) {
        var token = _ref22.token,
            jwtToken = _ref22.jwtToken,
            _ref22$query = _ref22.query,
            query = _ref22$query === undefined ? {} : _ref22$query,
            headers = _ref22.headers,
            manifestId = _ref22.manifestId,
            legFromId = _ref22.legFromId,
            ticketId = _ref22.ticketId;

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
    get: function get(_ref23) {
      var token = _ref23.token,
          jwtToken = _ref23.jwtToken,
          _ref23$query = _ref23.query,
          query = _ref23$query === undefined ? {} : _ref23$query,
          _ref23$responseType = _ref23.responseType,
          responseType = _ref23$responseType === undefined ? "json" : _ref23$responseType,
          id = _ref23.id,
          headers = _ref23.headers;

      return client({
        url: "/manifests/" + id + "/reports",
        method: "get",
        responseType: responseType,
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var labels = {
    add: function add(_ref24) {
      var token = _ref24.token,
          jwtToken = _ref24.jwtToken,
          manifestId = _ref24.manifestId,
          _ref24$query = _ref24.query,
          query = _ref24$query === undefined ? {} : _ref24$query,
          headers = _ref24.headers,
          data = _ref24.data;

      return client({
        url: "/manifests/" + manifestId + "/labels",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: data
      });
    },
    remove: function remove(_ref25) {
      var token = _ref25.token,
          jwtToken = _ref25.jwtToken,
          manifestId = _ref25.manifestId,
          labelId = _ref25.labelId,
          headers = _ref25.headers;

      return client({
        url: "/manifests/" + manifestId + "/labels/" + labelId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var driverRelays = {
    update: function update(_ref26) {
      var token = _ref26.token,
          jwtToken = _ref26.jwtToken,
          manifestId = _ref26.manifestId,
          _ref26$query = _ref26.query,
          query = _ref26$query === undefined ? { bypassValidation: false } : _ref26$query,
          headers = _ref26.headers,
          data = _ref26.data;

      return client({
        url: "/manifests/" + manifestId + "/driver-relays",
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: data
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
    updateDispatchReporting: updateDispatchReporting,
    createDispatchReporting: createDispatchReporting,
    checkIn: checkIn,
    legs: legs,
    reports: reports,
    labels: labels,
    driverRelays: driverRelays
  };
}

module.exports = manifestFactory;