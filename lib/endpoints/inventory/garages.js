"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /garages (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} GaragesQuery
 * @property {string} [location] - The garage's location
 * @property {string} [stationId] - The id of the station associated to the garage
 */

/**
 * Factory for garages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function garagesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /garages - list garages (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {GaragesQuery} [opts.query] - Query params (location, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garages: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (401, 500)
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/garages", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /garages/:garageId - get garage by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.garageId - Garage id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garage: Object }>>}
   * @throws When response is 4xx/5xx (400 INVALID_GARAGE_ID, 401, 404 GARAGE_NOT_FOUND, 500)
   */
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        garageId = _ref3.garageId,
        headers = _ref3.headers;

    return client.get("/garages/" + garageId, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /garages - create garage.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Garage payload (name, location, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garage: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 500)
   */
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/garages",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: data
    });
  }

  /**
   * PUT /garages/:garageId - update garage.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.garageId - Garage id (24 hex characters)
   * @param {Object} opts.data - Garage payload (name, location, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garage: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 GARAGE_NOT_FOUND/STATION_NOT_FOUND, 500)
   */
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        garageId = _ref5.garageId,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/garages/" + garageId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: data
    });
  }

  /**
   * DELETE /garages/:garageId - remove garage.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.garageId - Garage id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ success: boolean }>>}
   * @throws When response is 4xx/5xx (400 INVALID_GARAGE_ID or GARAGE_WITH_VEHICLES, 401, 404, 500)
   */
  function remove(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        garageId = _ref6.garageId,
        headers = _ref6.headers;

    return client({
      url: "/garages/" + garageId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = garagesFactory;