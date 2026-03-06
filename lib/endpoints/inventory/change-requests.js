"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /change-requests - list change requests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ChangeRequestsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/change-requests", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function get(_ref3) {
    var changerequestId = _ref3.changerequestId,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/change-requests/" + changerequestId + "/manifests",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
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
  function create(_ref4) {
    var data = _ref4.data,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/change-requests/manifests",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
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
  function update(_ref5) {
    var changerequestId = _ref5.changerequestId,
        data = _ref5.data,
        token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/change-requests/" + changerequestId + "/manifests",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /** @type {{ get: function, create: function, update: function }} */
  var schedules = {
    /**
     * GET /change-requests/:changeRequestId/schedules - get change request schedules. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.changeRequestId - Change request id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref6) {
      var changeRequestId = _ref6.changeRequestId,
          token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query,
          headers = _ref6.headers;

      return client({
        url: "/change-requests/" + changeRequestId + "/schedules",
        params: query,
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
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
    create: function create(_ref7) {
      var data = _ref7.data,
          token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          headers = _ref7.headers;

      return client({
        url: "/change-requests/schedules",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
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
    update: function update(_ref8) {
      var changeRequestId = _ref8.changeRequestId,
          data = _ref8.data,
          token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          headers = _ref8.headers;

      return client({
        url: "/change-requests/" + changeRequestId + "/schedules",
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    schedules: schedules
  };
}

module.exports = changeRequestsFactory;