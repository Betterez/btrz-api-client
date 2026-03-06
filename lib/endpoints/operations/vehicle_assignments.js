"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} VehicleAssignmentsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for vehicle-assignments API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} vehicle-assignments API methods
 */


function vehicleAssignmentFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    /**
     * GET /vehicle-assignments - list vehicle assignments.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {VehicleAssignmentsQuery} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/vehicle-assignments",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * GET /vehicle-assignments/:vehicleAssignmentId - get vehicle assignment by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.vehicleAssignmentId - Vehicle assignment id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          vehicleAssignmentId = _ref3.vehicleAssignmentId,
          headers = _ref3.headers;

      return client.get("/vehicle-assignments/" + vehicleAssignmentId, {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * POST /vehicle-assignments - create vehicle assignment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Request body
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref4) {
      var data = _ref4.data,
          token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          headers = _ref4.headers;

      return client({
        url: "/vehicle-assignments",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    },

    /**
     * PUT /vehicle-assignments/:vehicleAssignmentId - update vehicle assignment.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.vehicleAssignmentId - Vehicle assignment id
     * @param {Object} opts.data - Request body
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref5) {
      var vehicleAssignmentId = _ref5.vehicleAssignmentId,
          data = _ref5.data,
          token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          headers = _ref5.headers;

      return client({
        url: "/vehicle-assignments/" + vehicleAssignmentId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };
}

module.exports = vehicleAssignmentFactory;