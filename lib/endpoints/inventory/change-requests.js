

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /change-requests (btrz-api-inventory). See get-change-requests getSpec().
 * @typedef {Object} ChangeRequestsListQuery
 * @property {string} [type] - Filter by change request type
 * @property {string} [status] - Filter by status
 * @property {string} [createdBy] - Filter by user id
 * @property {string} [from] - Filter by creation date from (YYYY-MM-DD)
 * @property {string} [to] - Filter by creation date to (YYYY-MM-DD)
 * @property {string} [operationId] - Filter by operation ID
 * @property {string} [operationType] - Filter by operation type
 * @property {number} [page] - Page number
 * @property {string} [orderBy] - Field to order by
 * @property {string} [orderDir] - asc (1) or desc (-1)
 * @property {number} [pageSize] - Results per page
 */

/**
 * Factory for change-requests API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, schedules: object }}
 */


function changeRequestsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /change-requests — List change requests with optional filters and pagination.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {ChangeRequestsListQuery} [opts.query] - Query params (type, status, createdBy, from, to, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ changeRequests: Object[], count: number, next: string, previous: string }>>}
   * @throws 400 INVALID_PAGE, INVALID_TYPE_PARAMETER, INVALID_STATUS_PARAMETER, etc.
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/change-requests", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /change-requests/:changerequestId/manifests — Get manifest change request by ID. Requires multipleManifestEditing.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.changerequestId - Change request id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ changeRequest: Object }>>}
   * @throws 400 INVALID_CHANGEREQUEST_ID, FAILED_TO_FETCH_OPERATION_SETTINGS
   * @throws 401 Unauthorized
   * @throws 403 MULTIPLE_MANIFEST_EDIT_NOT_ALLOWED
   * @throws 404 CHANGEREQUEST_NOT_FOUND
   * @throws 500 Internal server error
   */
  function get(_ref3) {
    const changerequestId = _ref3.changerequestId;
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/change-requests/${changerequestId}/manifests`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  /**
   * POST /change-requests/manifests — Create manifest change request. Emits changeRequests.manifests.created.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {Object} opts.data - Manifest change request payload (manifestId, request, routeId, scheduleId, date, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ changeRequest: Object }>>}
   * @throws 400 WRONG_DATA, FAILED_TO_FETCH_OPERATION_SETTINGS, MANIFEST_NOT_FOUND, etc.
   * @throws 401 Unauthorized
   * @throws 403 MULTIPLE_MANIFEST_EDIT_NOT_ALLOWED
   * @throws 500 Internal server error
   */
  function create(_ref4) {
    const data = _ref4.data;
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const headers = _ref4.headers;

    return client({
      url: "/change-requests/manifests",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /change-requests/:changerequestId/manifests — Update manifest change request. Emits changeRequests.manifests.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.changerequestId - Change request id (24 hex characters)
   * @param {Object} opts.data - Update payload (status: 'approved' or 'rejected')
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ changeRequest: Object }>>}
   * @throws 400 WRONG_DATA, CHANGEREQUEST_STATUS_NOT_PENDING, etc.
   * @throws 401 Unauthorized
   * @throws 403 MULTIPLE_MANIFEST_EDIT_NOT_ALLOWED
   * @throws 404 CHANGEREQUEST_NOT_FOUND
   * @throws 500 Internal server error
   */
  function update(_ref5) {
    const changerequestId = _ref5.changerequestId;
    const data = _ref5.data;
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

    return client({
      url: `/change-requests/${changerequestId}/manifests`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /** @type {{ get: function, create: function, update: function }} */
  const schedules = {
    /**
     * GET /change-requests/:changeRequestId/schedules — Get schedule change request by ID.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth
     * @param {string} opts.changeRequestId - Change request id (24 hex characters)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ changeRequest: Object }>>}
     * @throws 400 INVALID_CHANGEREQUEST_ID, FAILED_TO_FETCH_OPERATION_SETTINGS, etc.
     * @throws 401 Unauthorized
     * @throws 404 CHANGEREQUEST_NOT_FOUND
     * @throws 500 Internal server error
     */
    get: function get(_ref6) {
      const changeRequestId = _ref6.changeRequestId;
      const token = _ref6.token;
      const jwtToken = _ref6.jwtToken;
      const _ref6$query = _ref6.query;
      const query = _ref6$query === undefined ? {} : _ref6$query;
      const headers = _ref6.headers;

      return client({
        url: `/change-requests/${changeRequestId}/schedules`,
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
      });
    },


    /**
     * POST /change-requests/schedules — Create a schedule change request. Emits webhook changeRequests.schedules.created.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth
     * @param {Object} opts.data - Schedule change request payload (request, routeId, scheduleId, legs, etc.)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ changeRequest: Object }>>}
     * @throws 400 WRONG_DATA, FAILED_TO_FETCH_OPERATION_SETTINGS, etc.
     * @throws 401 Unauthorized
     * @throws 500 Internal server error
     */
    create: function create(_ref7) {
      const data = _ref7.data;
      const token = _ref7.token;
      const jwtToken = _ref7.jwtToken;
      const headers = _ref7.headers;

      return client({
        url: "/change-requests/schedules",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },


    /**
     * PUT .../schedules — Update schedule change request (approve/reject). Emits changeRequests.schedules.updated.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth
     * @param {string} opts.changeRequestId - Change request id (24 hex characters)
     * @param {Object} opts.data - Update payload (status: 'approved' or 'rejected')
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ changeRequest: Object }>>}
     * @throws 400 WRONG_DATA, CHANGEREQUEST_STATUS_NOT_PENDING, etc.
     * @throws 401 Unauthorized
     * @throws 404 CHANGEREQUEST_NOT_FOUND
     * @throws 500 Internal server error
     */
    update: function update(_ref8) {
      const changeRequestId = _ref8.changeRequestId;
      const data = _ref8.data;
      const token = _ref8.token;
      const jwtToken = _ref8.jwtToken;
      const headers = _ref8.headers;

      return client({
        url: `/change-requests/${changeRequestId}/schedules`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    schedules
  };
}

module.exports = changeRequestsFactory;
