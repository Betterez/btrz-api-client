/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /seatmaps (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} SeatmapsListQuery
 * @property {string} [vehicleId] - Return only seatmaps assigned to this vehicle; disables pagination
 * @property {string} [name] - Filter by name (case-insensitive partial match)
 * @property {string} [amenityGroupId] - Filter by amenity group id
 * @property {string} [brandId] - Filter by brand id
 * @property {number} [capacity] - Filter by exact capacity
 * @property {boolean} [standard] - Filter by standard seatmap flag
 * @property {boolean} [originalOnly] - When true, only original seatmaps (no manifest copies)
 * @property {boolean} [newdesign] - When true, query new design collection; otherwise legacy
 * @property {number} [page] - Page number (1-based, 20 per page); ignored when vehicleId provided
 */

/**
 * Query params for GET /seatmaps/:seatmapId/available-seats/... (btrz-api-inventory). See get-seatmaps-id-available-seats getSpec().
 * @typedef {Object} SeatmapsAvailableSeatsQuery
 * @property {boolean} [newdesign] - If true and account uses new design, return new structure
 * @property {string} [originId] - Origin station for segment (required for API)
 * @property {string} [destinationId] - Destination station for segment (required for API)
 * @property {string} [providerId] - Provider id; defaults to account
 * @property {string} [legFromIndex] - Departure station index in schedule (0-based)
 * @property {string} [legToIndex] - Arrival station index in schedule (0-based)
 * @property {string} [channel] - Channel: agency, agency-backoffice, backoffice, websales, agency-websales
 */

/**
 * Query for GET /seatmaps/:seatmapId/occupied-seats (btrz-api-inventory). See get-occupied-seats getSpec().
 * @typedef {Object} SeatmapsOccupiedSeatsQuery
 * @property {boolean} newdesign - Must be true; required for new-design seatmaps
 */

/**
 * Factory for seatmaps API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, getById: function, create: function, remove: function, update: function, getOccupiedSeats: function }}
 */
function seatmapsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /seatmaps - list seatmaps.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SeatmapsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/seatmaps", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }
  /**
   * GET /seatmaps/:seatmapId/available-seats/:routeId/:scheduleId/:manifestDate - get available seats.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {string} opts.routeId - Route id
   * @param {string} opts.scheduleId - Schedule id
   * @param {string} opts.manifestDate - Manifest date
   * @param {SeatmapsAvailableSeatsQuery} [opts.query] - Query params (originId, destinationId, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({seatmapId, routeId, scheduleId, manifestDate, query = {}, token, headers}) {
    return client.get(`/seatmaps/${seatmapId}/available-seats/${routeId}/${scheduleId}/${manifestDate}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /seatmaps/:seatmapId - get seatmap by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {string} [opts.providerId] - Optional account id to scope lookup (query)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById({seatmapId, token, jwtToken, query = {}, headers}) {
    return client.get(`/seatmaps/${seatmapId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /seatmaps - create seatmap. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.seatmap - Seatmap payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, seatmap, headers}) {
    return client({
      url: "/seatmaps",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatmap
      }
    });
  }

  /**
   * PUT /seatmaps/:seatmapId - update seatmap. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {Object} opts.seatmap - Seatmap payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, seatmapId, seatmap, headers}) {
    return client({
      url: `/seatmaps/${seatmapId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatmap
      }
    });
  }

  /**
   * DELETE /seatmaps/:seatmapId - remove seatmap. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({token, jwtToken, seatmapId, headers}) {
    return client({
      url: `/seatmaps/${seatmapId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /seatmaps/:seatmapId/occupied-seats - get occupied seats. Requires newdesign=true in query.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {SeatmapsOccupiedSeatsQuery} [opts.query] - Query (newdesign required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getOccupiedSeats({token, jwtToken, seatmapId, query = {}, headers}) {
    return client.get(`/seatmaps/${seatmapId}/occupied-seats`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get,
    getById,
    create,
    remove,
    update,
    getOccupiedSeats
  };
}

module.exports = seatmapsFactory;
