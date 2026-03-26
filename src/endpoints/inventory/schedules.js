/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function schedulesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /routes/schedules - list schedules.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SchedulesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/routes/schedules", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function get({token, routeId, scheduleId, headers, query = {}}) {
    return client.get(`/routes/${routeId}/schedules/${scheduleId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function create({token, jwtToken, data, routeId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  /**
   * POST /routes/:routeId/schedules/validations - validate schedule creation. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {Object} opts.data - Schedule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function validations({token, jwtToken, data, routeId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules/validations`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  /**
   * PUT /routes/:routeId/schedules/:scheduleId/validations - validate schedule update. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {string} opts.scheduleId - Schedule id
   * @param {Object} opts.data - Schedule payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function runUpdateValidations({token, jwtToken, data, routeId, scheduleId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules/${scheduleId}/validations`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
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
  function update({token, jwtToken, data, routeId, scheduleId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules/${scheduleId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
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
  function deleteSchedule({token, jwtToken, routeId, scheduleId, headers}) {
    return client({
      url: `/routes/${routeId}/schedules/${scheduleId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /** @type {{ create: function, delete: function }} */
  const autoBouncing = {
    /**
     * POST /routes/schedules/auto-bouncing - create auto bouncing. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Auto bouncing payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: ({token, jwtToken, data, headers}) => {
      return client({
        url: "/routes/schedules/auto-bouncing",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data
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
    delete: ({token, jwtToken, routeId, parentScheduleId, headers}) => {
      return client({
        url: `/routes/${routeId}/schedules/${parentScheduleId}/auto-bouncing`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    }
  };

  /** @type {{ create: function, delete: function, update: function }} */
  const exceptions = {
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
    create: ({token, jwtToken, data, scheduleId, headers, query = {}}) => {
      return client({
        url: `/schedules/${scheduleId}/schedule-exceptions`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data,
        params: query
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
    delete: ({token, jwtToken, scheduleId, exceptionId, headers, query = {}}) => {
      return client({
        url: `/schedules/${scheduleId}/schedule-exceptions/${exceptionId}`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
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
    update: ({token, jwtToken, data, scheduleId, exceptionId, headers, query = {}}) => {
      return client({
        url: `/schedules/${scheduleId}/schedule-exceptions/${exceptionId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data,
        params: query
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    delete: deleteSchedule,
    validations,
    runUpdateValidations,
    autoBouncing,
    exceptions
  };
}

module.exports = schedulesFactory;
