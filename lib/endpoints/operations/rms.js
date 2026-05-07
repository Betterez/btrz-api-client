"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /rms/manifest-forecast (btrz-api-operations). See get-handler getSpec() and handlers-common parameters().
 * @typedef {Object} RmsManifestForecastListQuery
 * @property {string} date - Manifest forecast date (required; YYYY-MM-DD)
 * @property {string} [time] - Time (HH:mm)
 * @property {string} [brandId] - Brand id (ObjectId)
 * @property {string} [productId] - Product id (ObjectId)
 * @property {string} [routeId] - Route id
 * @property {string} [amenityGroupId] - Amenity group id
 * @property {string} [scheduleGroupId] - Schedule group id
 * @property {string} [originId] - Origin station id (ObjectId)
 * @property {string} [destinationId] - Destination station id (ObjectId)
 * @property {string[]} [status] - Manifest status filter (valid manifest status values)
 * @property {number} [forecastMin] - Minimum forecast value
 * @property {number} [forecastMax] - Maximum forecast value
 * @property {number} [loadMin] - Minimum load value
 * @property {number} [loadMax] - Maximum load value
 */

/**
 * Query params for GET /rms/manifest-forecast/:scheduleId (btrz-api-operations). Only common params (no date).
 * @typedef {Object} RmsManifestForecastGetQuery
 * @property {string} [originId] - Origin station id (ObjectId)
 * @property {string} [destinationId] - Destination station id (ObjectId)
 * @property {string[]} [status] - Manifest status filter
 * @property {number} [forecastMin] - Minimum forecast value
 * @property {number} [forecastMax] - Maximum forecast value
 * @property {number} [loadMin] - Minimum load value
 * @property {number} [loadMax] - Maximum load value
 */

/**
 * Factory for RMS API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} rms API methods (manifestForecasts)
 */


function rmsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var manifestForecasts = {
    /**
     * GET /rms/manifest-forecast - list manifest forecasts. Query: date required.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {RmsManifestForecastListQuery} [opts.query] - Query params (date required)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client.get("/rms/manifest-forecast", {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * GET /rms/manifest-forecast/:scheduleId - get manifest forecast by schedule id.
     * Optional query: originId, destinationId, status, forecastMin/Max, loadMin/Max.
     * @param {Object} opts
     * @param {string} opts.scheduleId - Schedule id (UUID4)
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {RmsManifestForecastGetQuery} [opts.query] - Optional query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref3) {
      var scheduleId = _ref3.scheduleId,
          token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          _ref3$query = _ref3.query,
          query = _ref3$query === undefined ? {} : _ref3$query,
          headers = _ref3.headers;

      return client.get("/rms/manifest-forecast/" + scheduleId, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    manifestForecasts: manifestForecasts
  };
}

module.exports = rmsFactory;