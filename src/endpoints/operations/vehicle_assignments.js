const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

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
function vehicleAssignmentFactory({client, internalAuthTokenProvider}) {
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
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/vehicle-assignments",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    get({token, jwtToken, vehicleAssignmentId, headers}) {
      return client.get(`/vehicle-assignments/${vehicleAssignmentId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
    create({data, token, jwtToken, headers}) {
      return client({
        url: "/vehicle-assignments",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
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
    update({vehicleAssignmentId, data, token, jwtToken, headers}) {
      return client({
        url: `/vehicle-assignments/${vehicleAssignmentId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };
}

module.exports = vehicleAssignmentFactory;
