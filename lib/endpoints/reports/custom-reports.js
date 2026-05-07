"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /custom-reports (btrz-api-reports). Documented from client; backend may support pagination/filters.
 * @typedef {Object} CustomReportsListQuery
 * @property {number} [page] - Page (if supported)
 * @property {number} [recordsPerPage] - Records per page (if supported)
 */

/**
 * Factory for custom reports API (btrz-api-reports).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, all: function, remove: function }}
 */


function customReportsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /custom-reports - create custom report.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.customReport - Custom report payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    var token = _ref2.token,
        customReport = _ref2.customReport,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/custom-reports",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { customReport: customReport }
    });
  }

  /**
   * GET /custom-reports - list custom reports.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CustomReportsListQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/custom-reports",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * DELETE /custom-reports/:customReportId - remove custom report.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.customReportId - Custom report id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        customReportId = _ref4.customReportId,
        headers = _ref4.headers;

    return client({
      url: "/custom-reports/" + customReportId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    create: create,
    all: all,
    remove: remove
  };
}

module.exports = customReportsFactory;