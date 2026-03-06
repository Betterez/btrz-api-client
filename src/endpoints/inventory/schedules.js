/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
   * GET /routes/:routeId/schedules/:scheduleId - get schedule by id.
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
   * POST /routes/:routeId/schedules - create schedule.
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
   * PUT /routes/:routeId/schedules/:scheduleId - update schedule.
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
   * DELETE /routes/:routeId/schedules/:scheduleId - delete schedule.
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
     * POST /routes/schedules/auto-bouncing - create auto bouncing.
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
     * DELETE /routes/:routeId/schedules/:parentScheduleId/auto-bouncing - delete auto bouncing.
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
     * POST /schedules/:scheduleId/schedule-exceptions - create schedule exception.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.scheduleId - Schedule id
     * @param {Object} opts.data - Exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: ({token, jwtToken, data, scheduleId, headers}) => {
      return client({
        url: `/schedules/${scheduleId}/schedule-exceptions`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data
      });
    },
    /**
     * DELETE /schedules/:scheduleId/schedule-exceptions/:exceptionId - delete schedule exception.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.scheduleId - Schedule id
     * @param {string} opts.exceptionId - Exception id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    delete: ({token, jwtToken, scheduleId, exceptionId, headers}) => {
      return client({
        url: `/schedules/${scheduleId}/schedule-exceptions/${exceptionId}`,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    },
    /**
     * PUT /schedules/:scheduleId/schedule-exceptions/:exceptionId - update schedule exception.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.scheduleId - Schedule id
     * @param {string} opts.exceptionId - Exception id
     * @param {Object} opts.data - Exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: ({token, jwtToken, data, scheduleId, exceptionId, headers}) => {
      return client({
        url: `/schedules/${scheduleId}/schedule-exceptions/${exceptionId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    delete: deleteSchedule,
    autoBouncing,
    exceptions
  };
}

module.exports = schedulesFactory;
