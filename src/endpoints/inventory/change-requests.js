const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function changeRequestsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /change-requests - list change requests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ChangeRequestsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/change-requests", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /change-requests/:changerequestId/manifests - get change request manifests. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.changerequestId - Change request id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({changerequestId, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/change-requests/${changerequestId}/manifests`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  /**
   * POST /change-requests/manifests - create change request manifest. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Manifest payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/change-requests/manifests",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /change-requests/:changerequestId/manifests - update change request manifest. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.changerequestId - Change request id
   * @param {Object} opts.data - Manifest payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({changerequestId, data, token, jwtToken, headers}) {
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
     * GET /change-requests/:changeRequestId/schedules - get change request schedules. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.changeRequestId - Change request id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({changeRequestId, token, jwtToken, query = {}, headers}) {
      return client({
        url: `/change-requests/${changeRequestId}/schedules`,
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
      });
    },

    /**
     * POST /change-requests/schedules - create change request schedule. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Schedule payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create({data, token, jwtToken, headers}) {
      return client({
        url: "/change-requests/schedules",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },

    /**
     * PUT /change-requests/:changeRequestId/schedules - update change request schedule. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.changeRequestId - Change request id
     * @param {Object} opts.data - Schedule payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update({changeRequestId, data, token, jwtToken, headers}) {
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
