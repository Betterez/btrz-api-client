

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /manifests (btrz-api-operations). See get-manifests getSpec().
 * @typedef {Object} ManifestsListQuery
 * @property {string} [providerIds] - Provider IDs of the manifests
 * @property {string} [routeIds] - Route IDs
 * @property {string} [scheduleIds] - Schedule IDs
 * @property {string} [date] - Date (yyyy-mm-dd)
 * @property {string} [dateFrom] - Start date range (yyyy-mm-dd)
 * @property {string} [dateTo] - End date range (yyyy-mm-dd)
 * @property {string} [seatmapId] - Seatmap ID
 * @property {string} [vehicleId] - Vehicle ID
 * @property {string} [assignedUserId] - Assigned user ID
 * @property {boolean} [dispatched] - If manifest was dispatched
 * @property {boolean} [reviewed] - If manifest was reviewed
 * @property {string} [sendToSAP] - If manifest should be sent to SAP
 * @property {string} [operatingCompanyId] - Operating company ID
 * @property {number} [vehicleFrom] - First vehicle id (range)
 * @property {number} [vehicleTo] - Last vehicle id (range)
 * @property {string} [dispatchedStatus] - Filter by dispatched status
 * @property {boolean} [manifestOnly] - If only manifest (no ticket info)
 * @property {string} [status] - Comma-separated manifest statuses
 */

/**
 * Query params for PUT /manifests (btrz-api-operations). See put-manifest getSpec().
 * @typedef {Object} ManifestSaveQuery
 * @property {string} providerId - Provider ID (required)
 * @property {string} [manifestId] - Manifest ID to update (omit to create)
 * @property {boolean} [bypassBusValidation] - Bypass bus validation
 */

/**
 * Query params for PATCH /manifests (btrz-api-operations). See patch-manifest getSpec().
 * @typedef {Object} ManifestPatchQuery
 * @property {string} providerId - Provider ID (required)
 * @property {string} [routeId] - Route ID for update_schedule
 * @property {string} [scheduleId] - New schedule ID for update_schedule
 * @property {string} [oldScheduleId] - Old schedule ID for update_schedule
 * @property {string} [accommodateOnAnySeat] - "true" to assign missing seats to any available
 * @property {string} [newdesign] - "true" when using new seatmap design
 */

/**
 * Query params for GET /outlook-manifests (btrz-api-operations). See get-outlook-manifests getSpec().
 * @typedef {Object} OutlookManifestsListQuery
 * @property {string} providerId - Provider ID (required)
 * @property {string} productId - Product ID (required)
 * @property {string} from - Start date (required, yyyy-mm-dd)
 * @property {string} to - End date (required, yyyy-mm-dd, max 1 month range)
 * @property {string} [scheduleName] - Schedule name filter
 * @property {string} [loadFactorFrom] - Min load factor
 * @property {string} [loadFactorTo] - Max load factor
 * @property {string} [timeFrom] - Min time filter
 * @property {string} [timeTo] - Max time filter
 * @property {string} [originId] - Origin station id
 * @property {string} [destinationId] - Destination station id
 * @property {string} [amenityGroupId] - Amenity group id
 * @property {string} [userId] - Only manifests with this user assigned
 * @property {string} [withAssignedUsers] - Filter by assigned users (true/false)
 * @property {string} [status] - Comma-separated statuses (published, paused, planned, canceled)
 * @property {boolean} [isExtraRun] - Only extra run trips
 * @property {boolean} [minimalPayload] - Minimal data for five day outlook
 * @property {string} [labelId] - Label id filter
 * @property {boolean} [dispatched] - Only dispatched manifests
 */

/**
 * Query params for PUT /manifests/:manifestKey/driver-relays (btrz-api-operations). See put-driver-relays-handler getSpec().
 * @typedef {Object} ManifestDriverRelaysQuery
 * @property {boolean} [bypassValidations] - If true, bypass driver validations
 */

/**
 * Factory for manifests API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} manifest API methods
 */


function manifestFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /manifests/dispatch/reporting - create dispatch reporting.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {Object} opts.data - Request body
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function createDispatchReporting(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;
    const data = _ref2.data;

    return client({
      url: "/manifests/dispatch/reporting",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT manifests/:manifestId/dispatch/reporting - update dispatch reporting.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} opts.manifestId - Manifest id
   * @param {Object} opts.data - Request body
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateDispatchReporting(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const headers = _ref3.headers;
    const manifestId = _ref3.manifestId;
    const data = _ref3.data;

    return client({
      url: `manifests/${manifestId}/dispatch/reporting`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST manifests/:manifestId/dispatches - dispatch manifest. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @param {string} opts.manifestId - Manifest id
   * @param {Object} opts.data - Request body
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function dispatch(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const headers = _ref4.headers;
    const manifestId = _ref4.manifestId;
    const data = _ref4.data;
    const query = _ref4.query;

    return client({
      url: `manifests/${manifestId}/dispatches`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data,
      params: query
    });
  }

  /**
   * GET /manifests - list manifests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ManifestsListQuery} [opts.query] - Query params (all optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const _ref5$query = _ref5.query;
    const query = _ref5$query === undefined ? {} : _ref5$query;
    const headers = _ref5.headers;

    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /manifests/:manifestId - get manifest by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const manifestId = _ref6.manifestId;
    const _ref6$query = _ref6.query;
    const query = _ref6$query === undefined ? {} : _ref6$query;
    const headers = _ref6.headers;

    return client({
      url: `/manifests/${manifestId}`,
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * PUT /manifests/status - bulk update manifest status.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function statusBulkUpdate(_ref7) {
    const token = _ref7.token;
    const jwtToken = _ref7.jwtToken;
    const data = _ref7.data;
    const headers = _ref7.headers;

    return client({
      url: "/manifests/status",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST /all-manifests - get all manifests (POST body for large query).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.providerId] - Provider id
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getAll(_ref8) {
    const token = _ref8.token;
    const jwtToken = _ref8.jwtToken;
    const providerId = _ref8.providerId;
    const data = _ref8.data;
    const headers = _ref8.headers;

    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/all-manifests",
      method: "post",
      params: {providerId},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * GET /outlook-manifests - outlook manifests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OutlookManifestsListQuery} [opts.query] - Query params (providerId, productId, from, to required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function outlook(_ref9) {
    const token = _ref9.token;
    const jwtToken = _ref9.jwtToken;
    const _ref9$query = _ref9.query;
    const query = _ref9$query === undefined ? {} : _ref9$query;
    const headers = _ref9.headers;

    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * PATCH /manifests - patch manifests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ManifestPatchQuery} [opts.query] - Query params (providerId required)
   * @param {Object} opts.operations - JSON Patch operations
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref10) {
    const token = _ref10.token;
    const jwtToken = _ref10.jwtToken;
    const _ref10$query = _ref10.query;
    const query = _ref10$query === undefined ? {} : _ref10$query;
    const operations = _ref10.operations;
    const headers = _ref10.headers;

    return client({
      url: "/manifests",
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        operations
      }
    });
  }

  /**
   * PUT /manifests - save manifest.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.providerId] - Provider id (required by API as query)
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @param {ManifestSaveQuery} [opts.query] - Query params (providerId required; manifestId, bypassBusValidation optional)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function save(_ref11) {
    const token = _ref11.token;
    const jwtToken = _ref11.jwtToken;
    const providerId = _ref11.providerId;
    const data = _ref11.data;
    const headers = _ref11.headers;
    const _ref11$query = _ref11.query;
    const query = _ref11$query === undefined ? {} : _ref11$query;

    return client({
      url: "/manifests",
      method: "put",
      params: _extends({providerId, manifestId: data.manifestId}, query),
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * POST /manifests/:manifestId/users - add user to manifest.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
       * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addUser(_ref12) {
    const token = _ref12.token;
    const jwtToken = _ref12.jwtToken;
    const manifestId = _ref12.manifestId;
    const _ref12$query = _ref12.query;
    const query = _ref12$query === undefined ? {} : _ref12$query;
    const data = _ref12.data;
    const headers = _ref12.headers;

    return client({
      url: `/manifests/${manifestId}/users`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  /**
   * DELETE /manifests/:manifestId/users/:userId - remove user from manifest.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {string} opts.userId - User id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function removeUser(_ref13) {
    const token = _ref13.token;
    const jwtToken = _ref13.jwtToken;
    const manifestId = _ref13.manifestId;
    const userId = _ref13.userId;
    const headers = _ref13.headers;

    return client({
      url: `/manifests/${manifestId}/users/${userId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * POST /manifests/:manifestId/capacity-exceptions - add capacity exception.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
       * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function addCapacityException(_ref14) {
    const token = _ref14.token;
    const jwtToken = _ref14.jwtToken;
    const manifestId = _ref14.manifestId;
    const _ref14$query = _ref14.query;
    const query = _ref14$query === undefined ? {} : _ref14$query;
    const data = _ref14.data;
    const headers = _ref14.headers;

    return client({
      url: `/manifests/${manifestId}/capacity-exceptions`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  /**
   * DELETE /manifests/:manifestId/capacity-exceptions/:exceptionId - remove capacity exception.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
   * @param {string} opts.exceptionId - Exception id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function removeCapacityException(_ref15) {
    const token = _ref15.token;
    const jwtToken = _ref15.jwtToken;
    const manifestId = _ref15.manifestId;
    const exceptionId = _ref15.exceptionId;
    const headers = _ref15.headers;

    return client({
      url: `/manifests/${manifestId}/capacity-exceptions/${exceptionId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /**
   * PUT /manifests/:manifestId/comments - update comment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
       * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateComment(_ref16) {
    const token = _ref16.token;
    const jwtToken = _ref16.jwtToken;
    const manifestId = _ref16.manifestId;
    const _ref16$query = _ref16.query;
    const query = _ref16$query === undefined ? {} : _ref16$query;
    const data = _ref16.data;
    const headers = _ref16.headers;

    return client({
      url: `/manifests/${manifestId}/comments`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  /**
   * PUT /manifests/:manifestId/status - update manifest status.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestId - Manifest id
       * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function updateStatus(_ref17) {
    const token = _ref17.token;
    const jwtToken = _ref17.jwtToken;
    const manifestId = _ref17.manifestId;
    const _ref17$query = _ref17.query;
    const query = _ref17$query === undefined ? {} : _ref17$query;
    const data = _ref17.data;
    const headers = _ref17.headers;

    return client({
      url: `/manifests/${manifestId}/status`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  /**
   * GET /manifests/:manifestKey/sales-authorizations - get sales authorizations.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.manifestKey - Manifest key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getSalesAuthorizations(_ref18) {
    const token = _ref18.token;
    const jwtToken = _ref18.jwtToken;
    const manifestKey = _ref18.manifestKey;
    const _ref18$query = _ref18.query;
    const query = _ref18$query === undefined ? {} : _ref18$query;
    const headers = _ref18.headers;

    return client({
      url: `/manifests/${manifestKey}/sales-authorizations`,
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  /** @type {{ create: function, open: function, close: function }} */
  const checkIn = {
    /**
     * POST /manifests/:manifestId/checkin/:legFromId - create check-in.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.data - Request body
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref19) {
      const token = _ref19.token;
      const jwtToken = _ref19.jwtToken;
      const _ref19$query = _ref19.query;
      const query = _ref19$query === undefined ? {} : _ref19$query;
      const headers = _ref19.headers;
      const data = _ref19.data;
      const manifestId = _ref19.manifestId;
      const legFromId = _ref19.legFromId;

      return client({
        url: `/manifests/${manifestId}/checkin/${legFromId}`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query,
        data
      });
    },

    /**
     * PATCH /manifests/:manifestId/checkin/:legFromId (open_check_in) - open check-in.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    open: function open(_ref20) {
      const token = _ref20.token;
      const jwtToken = _ref20.jwtToken;
      const _ref20$query = _ref20.query;
      const query = _ref20$query === undefined ? {} : _ref20$query;
      const headers = _ref20.headers;
      const manifestId = _ref20.manifestId;
      const legFromId = _ref20.legFromId;

      return client({
        url: `/manifests/${manifestId}/checkin/${legFromId}`,
        method: "patch",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query,
        data: {
          operation: {
            name: "open_check_in"
          }
        }
      });
    },

    /**
     * PATCH /manifests/:manifestId/checkin/:legFromId (close_check_in) - close check-in.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    close: function close(_ref21) {
      const token = _ref21.token;
      const jwtToken = _ref21.jwtToken;
      const _ref21$query = _ref21.query;
      const query = _ref21$query === undefined ? {} : _ref21$query;
      const headers = _ref21.headers;
      const manifestId = _ref21.manifestId;
      const legFromId = _ref21.legFromId;

      return client({
        url: `/manifests/${manifestId}/checkin/${legFromId}`,
        method: "patch",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
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

  /** @type {{ update: function, tickets: { update: function, noshow: function } }} */
  const legs = {
    /**
     * PUT /manifests/:manifestId/legs/:legFromId - update leg.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Request body
     * @param {Object} [opts.headers] - Optional headers
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.legFromId - Leg from id
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref22) {
      const token = _ref22.token;
      const jwtToken = _ref22.jwtToken;
      const data = _ref22.data;
      const _ref22$query = _ref22.query;
      const query = _ref22$query === undefined ? {} : _ref22$query;
      const headers = _ref22.headers;
      const manifestId = _ref22.manifestId;
      const legFromId = _ref22.legFromId;

      return client({
        url: `/manifests/${manifestId}/legs/${legFromId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    },

    tickets: {
      /**
       * PUT /manifests/:manifestId/legs/:legFromId/tickets/:ticketId - update leg ticket.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
       * @param {Object} opts.data - Request body
      * @param {Object} [opts.headers] - Optional headers
       * @param {string} opts.manifestId - Manifest id
       * @param {string} opts.legFromId - Leg from id
       * @param {string} opts.ticketId - Ticket id
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      update: function update(_ref23) {
        const token = _ref23.token;
        const jwtToken = _ref23.jwtToken;
        const data = _ref23.data;
        const _ref23$query = _ref23.query;
        const query = _ref23$query === undefined ? {} : _ref23$query;
        const headers = _ref23.headers;
        const manifestId = _ref23.manifestId;
        const legFromId = _ref23.legFromId;
        const ticketId = _ref23.ticketId;

        return client({
          url: `/manifests/${manifestId}/legs/${legFromId}/tickets/${ticketId}`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          params: query,
          data
        });
      },

      /**
       * PUT /manifests/:manifestId/legs/:legFromId/tickets/:ticketId/noshow - mark ticket noshow.
       * @param {Object} opts
       * @param {string} [opts.token] - API key
       * @param {string} [opts.jwtToken] - JWT or internal auth symbol
      * @param {Object} [opts.headers] - Optional headers
       * @param {string} opts.manifestId - Manifest id
       * @param {string} opts.legFromId - Leg from id
       * @param {string} opts.ticketId - Ticket id
       * @returns {Promise<import("axios").AxiosResponse>}
       */
      noshow: function noshow(_ref24) {
        const token = _ref24.token;
        const jwtToken = _ref24.jwtToken;
        const _ref24$query = _ref24.query;
        const query = _ref24$query === undefined ? {} : _ref24$query;
        const headers = _ref24.headers;
        const manifestId = _ref24.manifestId;
        const legFromId = _ref24.legFromId;
        const ticketId = _ref24.ticketId;

        return client({
          url: `/manifests/${manifestId}/legs/${legFromId}/tickets/${ticketId}/noshow`,
          method: "put",
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
          params: query
        });
      }
    }
  };

  const reports = {
    /**
     * GET /manifests/:id/reports - get manifest reports.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} [opts.responseType] - Response type (e.g. "json")
     * @param {string} opts.id - Manifest id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref25) {
      const token = _ref25.token;
      const jwtToken = _ref25.jwtToken;
      const _ref25$query = _ref25.query;
      const query = _ref25$query === undefined ? {} : _ref25$query;
      const _ref25$responseType = _ref25.responseType;
      const responseType = _ref25$responseType === undefined ? "json" : _ref25$responseType;
      const id = _ref25.id;
      const headers = _ref25.headers;

      return client({
        url: `/manifests/${id}/reports`,
        method: "get",
        responseType,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const labels = {
    /**
     * POST /manifests/:manifestId/labels - add label.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.data - Request body
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    add: function add(_ref26) {
      const token = _ref26.token;
      const jwtToken = _ref26.jwtToken;
      const manifestId = _ref26.manifestId;
      const _ref26$query = _ref26.query;
      const query = _ref26$query === undefined ? {} : _ref26$query;
      const headers = _ref26.headers;
      const data = _ref26.data;

      return client({
        url: `/manifests/${manifestId}/labels`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    },

    /**
     * DELETE /manifests/:manifestId/labels/:labelId - remove label.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {string} opts.labelId - Label id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref27) {
      const token = _ref27.token;
      const jwtToken = _ref27.jwtToken;
      const manifestId = _ref27.manifestId;
      const labelId = _ref27.labelId;
      const headers = _ref27.headers;

      return client({
        url: `/manifests/${manifestId}/labels/${labelId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const tripClose = {
    /**
     * POST /manifests/:manifestId/trip-close - add trip close.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    add: function add(_ref28) {
      const token = _ref28.token;
      const jwtToken = _ref28.jwtToken;
      const manifestId = _ref28.manifestId;
      const _ref28$query = _ref28.query;
      const query = _ref28$query === undefined ? {} : _ref28$query;
      const headers = _ref28.headers;

      return client({
        url: `/manifests/${manifestId}/trip-close`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    }
  };

  const driverRelays = {
    /**
     * PUT /manifests/:manifestId/driver-relays - update driver relays.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestId - Manifest id
     * @param {ManifestDriverRelaysQuery} [opts.query] - Query params (bypassValidations optional)
     * @param {Object} [opts.headers] - Optional headers
     * @param {Object} opts.data - Request body
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref29) {
      const token = _ref29.token;
      const jwtToken = _ref29.jwtToken;
      const manifestId = _ref29.manifestId;
      const _ref29$query = _ref29.query;
      const query = _ref29$query === undefined ? {bypassValidation: false} : _ref29$query;
      const headers = _ref29.headers;
      const data = _ref29.data;

      return client({
        url: `/manifests/${manifestId}/driver-relays`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    }
  };

  const manifestsExceptions = {
    /**
     * PUT /manifests/:manifestKey/manifests-exceptions - update manifest exceptions.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.manifestKey - Manifest key
     * @param {Object} opts.manifestException - Manifest exception payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref30) {
      const token = _ref30.token;
      const jwtToken = _ref30.jwtToken;
      const manifestKey = _ref30.manifestKey;
      const manifestException = _ref30.manifestException;
      const headers = _ref30.headers;
      const _ref30$query = _ref30.query;
      const query = _ref30$query === undefined ? {} : _ref30$query;

      return client({
        url: `/manifests/${manifestKey}/manifests-exceptions`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {manifestException}
      });
    }
  };

  return {
    get,
    getAll,
    getById,
    outlook,
    patch,
    save,
    addUser,
    removeUser,
    updateComment,
    updateStatus,
    addCapacityException,
    removeCapacityException,
    dispatch,
    updateDispatchReporting,
    createDispatchReporting,
    statusBulkUpdate,
    getSalesAuthorizations,
    manifestsExceptions,
    checkIn,
    legs,
    reports,
    labels,
    driverRelays,
    tripClose
  };
}

module.exports = manifestFactory;
