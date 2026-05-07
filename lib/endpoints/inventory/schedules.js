

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const token = _ref3.token;
    const routeId = _ref3.routeId;
    const scheduleId = _ref3.scheduleId;
    const headers = _ref3.headers;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;

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
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const data = _ref4.data;
    const routeId = _ref4.routeId;
    const headers = _ref4.headers;

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
  function validations(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const data = _ref5.data;
    const routeId = _ref5.routeId;
    const headers = _ref5.headers;

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
  function runUpdateValidations(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const data = _ref6.data;
    const routeId = _ref6.routeId;
    const scheduleId = _ref6.scheduleId;
    const headers = _ref6.headers;

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
  function update(_ref7) {
    const token = _ref7.token;
    const jwtToken = _ref7.jwtToken;
    const data = _ref7.data;
    const routeId = _ref7.routeId;
    const scheduleId = _ref7.scheduleId;
    const headers = _ref7.headers;

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
  function deleteSchedule(_ref8) {
    const token = _ref8.token;
    const jwtToken = _ref8.jwtToken;
    const routeId = _ref8.routeId;
    const scheduleId = _ref8.scheduleId;
    const headers = _ref8.headers;

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
    create: function create(_ref9) {
      const token = _ref9.token;
      const jwtToken = _ref9.jwtToken;
      const data = _ref9.data;
      const headers = _ref9.headers;

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
    delete: function _delete(_ref10) {
      const token = _ref10.token;
      const jwtToken = _ref10.jwtToken;
      const routeId = _ref10.routeId;
      const parentScheduleId = _ref10.parentScheduleId;
      const headers = _ref10.headers;

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
    create: function create(_ref11) {
      const token = _ref11.token;
      const jwtToken = _ref11.jwtToken;
      const data = _ref11.data;
      const scheduleId = _ref11.scheduleId;
      const headers = _ref11.headers;
      const _ref11$query = _ref11.query;
      const query = _ref11$query === undefined ? {} : _ref11$query;

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
    delete: function _delete(_ref12) {
      const token = _ref12.token;
      const jwtToken = _ref12.jwtToken;
      const scheduleId = _ref12.scheduleId;
      const exceptionId = _ref12.exceptionId;
      const headers = _ref12.headers;
      const _ref12$query = _ref12.query;
      const query = _ref12$query === undefined ? {} : _ref12$query;

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
    update: function update(_ref13) {
      const token = _ref13.token;
      const jwtToken = _ref13.jwtToken;
      const data = _ref13.data;
      const scheduleId = _ref13.scheduleId;
      const exceptionId = _ref13.exceptionId;
      const headers = _ref13.headers;
      const _ref13$query = _ref13.query;
      const query = _ref13$query === undefined ? {} : _ref13$query;

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
