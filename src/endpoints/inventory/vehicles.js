const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /vehicles (btrz-api-inventory). See API get-handler getSpec().
 * @typedef {Object} VehiclesQuery
 * @property {string} [disabled] - Filter by disabled status: "true" | "false"
 * @property {boolean} [newdesign] - With singleSeatmap: consider new design seatmaps
 * @property {boolean} [nopaging] - If true, return all matching vehicles (no page/limit)
 * @property {number} [page] - 1-based page (20 per page); ignored when singleSeatmap or nopaging
 * @property {boolean} [singleSeatmap] - If true, only vehicles with exactly one original seatmap (or zero if allowed)
 * @property {string} [name] - Case-insensitive partial match on vehicle name (max 50 chars)
 * @property {string} [internalId] - Exact match on internalId
 * @property {string} [garageId] - Exact match on garage ID (ObjectId)
 * @property {string} [brandId] - Exact match on brand ID (ObjectId)
 * @property {string} [amenityGroupId] - Exact match on amenity group ID (ObjectId)
 * @property {string} [brand] - Exact match on brand name; use "none" for empty
 * @property {number} [capacity] - Exact match on capacity (0–10000)
 * @property {number} [numberFrom] - Vehicles with number >= this value
 * @property {number} [numberTo] - Vehicles with number <= this value (must be >= numberFrom)
 * @property {string} [providerIds] - Provider IDs to scope the request (internal use)
 */

/**
 * Assigned seatmap snapshot on vehicle GET responses (btrz-api-inventory VehicleSeatmap).
 * Present when a seatmap is assigned; omitted when the vehicle has none.
 * Written only by POST/DELETE /vehicles/{vehicleId}/seatmaps, not by POST or PUT /vehicles.
 * @typedef {Object} VehicleSeatmap
 * @property {string} _id - Assigned seatmap id (24-char hex)
 * @property {string} name - Assigned seatmap name
 */

/**
 * Vehicle returned by GET /vehicles and GET /vehicles/{vehicleId} (btrz-api-inventory Vehicle).
 * @typedef {Object} Vehicle
 * @property {string} _id - Vehicle id
 * @property {string} accountId - Account the vehicle belongs to
 * @property {string} name - Vehicle name
 * @property {number} capacity - Vehicle capacity
 * @property {string} [licensePlate] - License plate
 * @property {string} [certification] - Certification
 * @property {string} [brand] - Brand name
 * @property {boolean} [disabled] - Whether the vehicle is unavailable
 * @property {string} [garageId] - Garage id
 * @property {string} [externalId] - External id
 * @property {string} [amenityGroupId] - Amenity group id
 * @property {string} [brandId] - Brand id
 * @property {number} [number] - Numeric identifier when the name is numeric
 * @property {VehicleSeatmap} [seatmap] - Assigned seatmap snapshot; omitted when not assigned
 * @property {string} [createdBy] - User id that created the vehicle
 * @property {string} [updatedBy] - User id that last updated the vehicle
 * @property {Object} [createdAt] - Creation date (BzDate)
 * @property {Object} [updatedAt] - Last update date (BzDate)
 */

/**
 * GET /vehicles response (btrz-api-inventory GetVehiclesResponse).
 * @typedef {Object} GetVehiclesResponse
 * @property {Vehicle[]} vehicles
 * @property {string} [next] - Next page link; empty if none
 * @property {string} [previous] - Previous page link; empty if none
 * @property {number} count - Total matching vehicles
 */

/**
 * GET /vehicles/{vehicleId} response (btrz-api-inventory VehicleResponse).
 * @typedef {Object} VehicleResponse
 * @property {Vehicle} vehicle
 */

/**
 * Factory for vehicles API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function, seatmaps: object }}
 */
function vehiclesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /vehicles - list vehicles.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {VehiclesQuery} [opts.query] - Query params (disabled, page, name, garageId, brandId, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<GetVehiclesResponse>>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/vehicles", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /vehicles/:vehicleId - get vehicle by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.vehicleId - Vehicle id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<VehicleResponse>>}
   */
  function get({vehicleId, token, jwtToken, headers}) {
    return client.get(`/vehicles/${vehicleId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /vehicles - create vehicle.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.vehicle - Vehicle payload (VehiclePostData). Does not accept seatmap; assign with vehicles.seatmaps.create.
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<VehicleResponse>>}
   */
  function create({jwtToken, token, vehicle, headers}) {
    return client({
      url: "/vehicles",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        vehicle
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
  function remove({jwtToken, vehicleId, token, headers}) {
    return client({
      url: `/vehicles/${vehicleId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /vehicles/:vehicleId - update vehicle.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.vehicleId - Vehicle id
   * @param {Object} opts.vehicle - Vehicle payload (VehiclePostData). Does not accept or change seatmap.
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<VehicleResponse>>}
   */
  function update({jwtToken, token, vehicleId, vehicle, headers}) {
    return client({
      url: `/vehicles/${vehicleId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        vehicle
      }
    });
  }

  /** @type {{ create: function, remove: function }} */
  const seatmaps = {
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
    create({jwtToken, token, vehicleId, seatmap, headers, newdesign}) {
      return client({
        url: `/vehicles/${vehicleId}/seatmaps`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          seatmap,
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
    remove({jwtToken, vehicleId, seatMapId, token, headers, newdesign}) {
      return client({
        url: `/vehicles/${vehicleId}/seatmaps/${seatMapId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          newdesign: newdesign || false
        }
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    remove,
    seatmaps
  };
}

module.exports = vehiclesFactory;
