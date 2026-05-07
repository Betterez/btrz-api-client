"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /scanner-app-location (GPS API). API is external (not in workspace);
 * shape from btrz-vue-websales and client usage.
 * @typedef {Object} ScannerAppLocationQuery
 * @property {string} [scheduleId] - Schedule id
 * @property {string} [routeId] - Route id
 * @property {string} [date] - Date (e.g. YYYY-MM-DD); defaults to today when omitted in websales
 * @property {boolean} [includeTravelledPath] - Whether to include travelled path
 */

/**
 * Factory for scanner app location API (GPS).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function scannerAppLocationFactory(_ref) {
  var client = _ref.client;

  /**
   * GET /scanner-app-location - get scanner app location.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {ScannerAppLocationQuery} [opts.query] - Query params (scheduleId, routeId, date, includeTravelledPath)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>} response.data may contain location
   */
  function get(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/scanner-app-location",
      headers: authorizationHeaders({ token: token, headers: headers }),
      params: query
    });
  }

  return {
    get: get
  };
}

module.exports = scannerAppLocationFactory;