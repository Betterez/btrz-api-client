

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /vehicle-assignments list (btrz-api-operations get-handler getSpec).
 * @typedef {Object} VehicleAssignmentsListQuery
 * @property {string} [name] - Partial or full name of the vehicle assignment
 * @property {string} [effectiveFrom] - Valid-from date (format per API)
 * @property {string} [effectiveTo] - Valid-to date (format per API)
 * @property {string} [status] - Status, comma-separated; valid: draft, published
 * @property {number} [page] - Page number (20 records per page)
 */

/**
 * Factory for vehicle-assignments API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} vehicle-assignments API methods
 */


function vehicleAssignmentFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
      const token = _ref2.token;
      const jwtToken = _ref2.jwtToken;
      const _ref2$query = _ref2.query;
      const query = _ref2$query === undefined ? {} : _ref2$query;
      const headers = _ref2.headers;

      return client({
        url: "/vehicle-assignments",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * GET /vehicle-assignments/:vehicleAssignmentId - get vehicle assignment by id. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.vehicleAssignmentId - Vehicle assignment id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref3) {
      const token = _ref3.token;
      const jwtToken = _ref3.jwtToken;
      const vehicleAssignmentId = _ref3.vehicleAssignmentId;
      const headers = _ref3.headers;

      return client.get(`/vehicle-assignments/${vehicleAssignmentId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },

    /**
     * POST /vehicle-assignments - create vehicle assignment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.data - Request body
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref4) {
      const data = _ref4.data;
      const token = _ref4.token;
      const jwtToken = _ref4.jwtToken;
      const headers = _ref4.headers;

      return client({
        url: "/vehicle-assignments",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },

    /**
     * PUT /vehicle-assignments/:vehicleAssignmentId - update vehicle assignment. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.vehicleAssignmentId - Vehicle assignment id
     * @param {Object} opts.data - Request body
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref5) {
      const vehicleAssignmentId = _ref5.vehicleAssignmentId;
      const data = _ref5.data;
      const token = _ref5.token;
      const jwtToken = _ref5.jwtToken;
      const headers = _ref5.headers;

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
