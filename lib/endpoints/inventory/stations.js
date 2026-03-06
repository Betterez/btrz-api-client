"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /stations (btrz-api-inventory). See get-stations getSpec().
 * @typedef {Object} StationsQuery
 * @property {string} [providerId] - The id of the provider to get stations for
 * @property {string} [providerIds] - The ids of the providers to get stations for
 * @property {string} [productId] - The id of the product
 * @property {string} [departure] - The id of the origin station
 * @property {string} [province] - The province of the station
 * @property {string} [zone] - The zone of the station
 * @property {string} [type] - The type name of the station
 * @property {string} [name] - The full name of the station
 * @property {string} [partialName] - Full or partial name (case-insensitive match)
 * @property {string} [enabled] - Filter by enabled: "true" | "false"
 * @property {number} [page] - Page for pagination
 * @property {string} [orderBy] - Field to order by
 * @property {string} [orderDir] - Order direction: asc (1) or desc (-1), default 1
 * @property {string} [stationIds] - Comma-separated station ids to return
 * @property {string} [filterHeadStations] - Filter stations that are grouping any station
 * @property {string} [includesStationsGroupFor] - Include stations that group/include the sent station id
 * @property {string} [externalId] - The id of the station in the external system
 * @property {string} [shortcode] - The shortcode of the station to filter by
 */

/**
 * Factory for stations API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function }}
 */


function stationsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /stations/:id - get station by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Station id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        id = _ref2.id,
        headers = _ref2.headers;

    return client.get("/stations/" + id, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /stations - list stations.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {StationsQuery} [opts.query] - Query params (providerId, productId, name, page, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref3) {
    var token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/stations", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /stations - create station. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Station payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/stations",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        station: data
      }
    });
  }

  /**
   * PUT /station/:stationId - update station. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.stationId - Station id
   * @param {Object} opts.station - Station payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        stationId = _ref5.stationId,
        station = _ref5.station,
        headers = _ref5.headers;

    return client({
      url: "/station/" + stationId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { station: station }
    });
  }

  return {
    get: get,
    all: all,
    create: create,
    update: update
  };
}

module.exports = stationsFactory;