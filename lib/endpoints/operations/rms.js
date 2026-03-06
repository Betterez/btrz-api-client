"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} RmsQuery
 * @property {string} [providerId] - Provider account ID
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
     * GET /rms/manifest-forecast - list manifest forecasts.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {RmsQuery} [opts.query] - Query params
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
     * @param {Object} opts
     * @param {string} opts.scheduleId - Schedule id
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {RmsQuery} [opts.query] - Query params
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