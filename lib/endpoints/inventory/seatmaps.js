"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} SeatmapsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for seatmaps API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, getById: function, create: function, remove: function, update: function, getOccupiedSeats: function }}
 */


function seatmapsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /seatmaps - list seatmaps.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SeatmapsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/seatmaps", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
   * @param {SeatmapsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var seatmapId = _ref3.seatmapId,
        routeId = _ref3.routeId,
        scheduleId = _ref3.scheduleId,
        manifestDate = _ref3.manifestDate,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/seatmaps/" + seatmapId + "/available-seats/" + routeId + "/" + scheduleId + "/" + manifestDate, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /seatmaps/:seatmapId - get seatmap by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {SeatmapsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getById(_ref4) {
    var seatmapId = _ref4.seatmapId,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client.get("/seatmaps/" + seatmapId, {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /seatmaps - create seatmap.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.seatmap - Seatmap payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        seatmap = _ref5.seatmap,
        headers = _ref5.headers;

    return client({
      url: "/seatmaps",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatmap: seatmap
      }
    });
  }

  /**
   * PUT /seatmaps/:seatmapId - update seatmap.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {Object} opts.seatmap - Seatmap payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        seatmapId = _ref6.seatmapId,
        seatmap = _ref6.seatmap,
        headers = _ref6.headers;

    return client({
      url: "/seatmaps/" + seatmapId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatmap: seatmap
      }
    });
  }

  /**
   * DELETE /seatmaps/:seatmapId - remove seatmap.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        seatmapId = _ref7.seatmapId,
        headers = _ref7.headers;

    return client({
      url: "/seatmaps/" + seatmapId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /seatmaps/:seatmapId/occupied-seats - get occupied seats.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.seatmapId - Seatmap id
   * @param {SeatmapsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getOccupiedSeats(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        seatmapId = _ref8.seatmapId,
        _ref8$query = _ref8.query,
        query = _ref8$query === undefined ? {} : _ref8$query,
        headers = _ref8.headers;

    return client.get("/seatmaps/" + seatmapId + "/occupied-seats", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    get: get,
    getById: getById,
    create: create,
    remove: remove,
    update: update,
    getOccupiedSeats: getOccupiedSeats
  };
}

module.exports = seatmapsFactory;