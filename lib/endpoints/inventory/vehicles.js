"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} VehiclesQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for vehicles API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function, seatmaps: object }}
 */


function vehiclesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /vehicles - list vehicles.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {VehiclesQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/vehicles", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /vehicles/:vehicleId - get vehicle by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.vehicleId - Vehicle id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var vehicleId = _ref3.vehicleId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/vehicles/" + vehicleId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /vehicles - create vehicle.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.vehicle - Vehicle payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        vehicle = _ref4.vehicle,
        headers = _ref4.headers;

    return client({
      url: "/vehicles",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        vehicle: vehicle
      }
    });
  }

  /**
   * DELETE /vehicles/:vehicleId - remove vehicle.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.vehicleId - Vehicle id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        vehicleId = _ref5.vehicleId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/vehicles/" + vehicleId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /vehicles/:vehicleId - update vehicle.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.vehicleId - Vehicle id
   * @param {Object} opts.vehicle - Vehicle payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        vehicleId = _ref6.vehicleId,
        vehicle = _ref6.vehicle,
        headers = _ref6.headers;

    return client({
      url: "/vehicles/" + vehicleId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        vehicle: vehicle
      }
    });
  }

  /** @type {{ create: function, remove: function }} */
  var seatmaps = {
    /**
     * POST /vehicles/:vehicleId/seatmaps - create vehicle seatmap.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.vehicleId - Vehicle id
     * @param {Object} opts.seatmap - Seatmap payload
     * @param {boolean} [opts.newdesign] - New design flag
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref7) {
      var jwtToken = _ref7.jwtToken,
          token = _ref7.token,
          vehicleId = _ref7.vehicleId,
          seatmap = _ref7.seatmap,
          headers = _ref7.headers,
          newdesign = _ref7.newdesign;

      return client({
        url: "/vehicles/" + vehicleId + "/seatmaps",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: {
          seatmap: seatmap,
          newdesign: newdesign || false
        }
      });
    },

    /**
     * DELETE /vehicles/:vehicleId/seatmaps/:seatMapId - remove vehicle seatmap.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.vehicleId - Vehicle id
     * @param {string} opts.seatMapId - Seat map id
     * @param {boolean} [opts.newdesign] - New design flag
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref8) {
      var jwtToken = _ref8.jwtToken,
          vehicleId = _ref8.vehicleId,
          seatMapId = _ref8.seatMapId,
          token = _ref8.token,
          headers = _ref8.headers,
          newdesign = _ref8.newdesign;

      return client({
        url: "/vehicles/" + vehicleId + "/seatmaps/" + seatMapId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: {
          newdesign: newdesign || false
        }
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove,
    seatmaps: seatmaps
  };
}

module.exports = vehiclesFactory;