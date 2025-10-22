"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function schedulesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/routes/schedules", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        routeId = _ref3.routeId,
        scheduleId = _ref3.scheduleId,
        headers = _ref3.headers,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client.get("/routes/" + routeId + "/schedules/" + scheduleId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        data = _ref4.data,
        routeId = _ref4.routeId,
        headers = _ref4.headers;

    return client({
      url: "/routes/" + routeId + "/schedules",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: data
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        data = _ref5.data,
        routeId = _ref5.routeId,
        scheduleId = _ref5.scheduleId,
        headers = _ref5.headers;

    return client({
      url: "/routes/" + routeId + "/schedules/" + scheduleId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: data
    });
  }

  function deleteSchedule(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        routeId = _ref6.routeId,
        scheduleId = _ref6.scheduleId,
        headers = _ref6.headers;

    return client({
      url: "/routes/" + routeId + "/schedules/" + scheduleId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  var autoBouncing = {
    create: function create(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          data = _ref7.data,
          headers = _ref7.headers;

      return client({
        url: "/routes/schedules/auto-bouncing",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: data
      });
    },
    delete: function _delete(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          routeId = _ref8.routeId,
          parentScheduleId = _ref8.parentScheduleId,
          headers = _ref8.headers;

      return client({
        url: "/routes/" + routeId + "/schedules/" + parentScheduleId + "/auto-bouncing",
        method: "delete",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    }
  };

  var exceptions = {
    create: function create(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          data = _ref9.data,
          scheduleId = _ref9.scheduleId,
          headers = _ref9.headers;

      return client({
        url: "/schedules/" + scheduleId + "/schedule-exceptions",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: data
      });
    },
    delete: function _delete(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          scheduleId = _ref10.scheduleId,
          exceptionId = _ref10.exceptionId,
          headers = _ref10.headers;

      return client({
        url: "/schedules/" + scheduleId + "/schedule-exceptions/" + exceptionId,
        method: "delete",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    },
    update: function update(_ref11) {
      var token = _ref11.token,
          jwtToken = _ref11.jwtToken,
          data = _ref11.data,
          scheduleId = _ref11.scheduleId,
          exceptionId = _ref11.exceptionId,
          headers = _ref11.headers;

      return client({
        url: "/schedules/" + scheduleId + "/schedule-exceptions/" + exceptionId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: data
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    delete: deleteSchedule,
    autoBouncing: autoBouncing,
    exceptions: exceptions
  };
}

module.exports = schedulesFactory;