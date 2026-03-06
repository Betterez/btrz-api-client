"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /routes/schedules (btrz-api-inventory). See get-schedules getSpec().
 * @typedef {Object} SchedulesListQuery
 * @property {string} [displayName] - Exact schedule name (case sensitive)
 * @property {string} [stationId] - Schedules that contain this station on legs
 * @property {string} [routeId] - Filter by route id
 * @property {string} [labelId] - Filter by label id
 * @property {string} [onlyActive] - Get active schedules (mutually exclusive with onlyInactive)
 * @property {string} [onlyInactive] - Get inactive schedules (mutually exclusive with onlyActive)
 * @property {string} [date] - Schedules active on this date (MM/DD/YYYY)
 * @property {number} [page] - Page for pagination
 * @property {string} [providerId] - Filter by provider
 */

/**
 * Factory for schedules API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, delete: function, autoBouncing: object, exceptions: object }}
 */


function schedulesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /routes/schedules - list schedules.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SchedulesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * GET /routes/:routeId/schedules/:scheduleId - get schedule by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {string} opts.scheduleId - Schedule id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * POST /routes/:routeId/schedules - create schedule. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} opts.data - Schedule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * PUT /routes/:routeId/schedules/:scheduleId - update schedule. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {string} opts.scheduleId - Schedule id
   * @param {Object} opts.data - Schedule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /**
   * DELETE /routes/:routeId/schedules/:scheduleId - delete schedule. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {string} opts.scheduleId - Schedule id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
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

  /** @type {{ create: function, delete: function }} */
  var autoBouncing = {
    /**
     * POST /routes/schedules/auto-bouncing - create auto bouncing. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Auto bouncing payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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
    /**
     * DELETE /routes/:routeId/schedules/:parentScheduleId/auto-bouncing - delete auto bouncing. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.routeId - Route id
     * @param {string} opts.parentScheduleId - Parent schedule id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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

  /** @type {{ create: function, delete: function, update: function }} */
  var exceptions = {
    /**
     * POST /schedules/:scheduleId/schedule-exceptions - create schedule exception. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.scheduleId - Schedule id
     * @param {Object} opts.data - Exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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
    /**
     * DELETE /schedules/:scheduleId/schedule-exceptions/:exceptionId - delete schedule exception. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.scheduleId - Schedule id
     * @param {string} opts.exceptionId - Exception id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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
    /**
     * PUT /schedules/:scheduleId/schedule-exceptions/:exceptionId - update schedule exception. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.scheduleId - Schedule id
     * @param {string} opts.exceptionId - Exception id
     * @param {Object} opts.data - Exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
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