"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /calendar-entries (btrz-api-operations). See get-calendar-entries getSpec().
 * @typedef {Object} CalendarEntriesListQuery
 * @property {string} from - Start travel date (required, format yyyy-mm-dd)
 * @property {string} to - End travel date (required, format yyyy-mm-dd, max 31 days range)
 * @property {string} [providerId] - Provider id when consuming from a non-main account
 * @property {string} [channels] - Filter by channel (e.g. websales); must be one of allowed channels
 */

/**
 * Factory for calendar-entries API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} calendar-entries API methods
 */


function calendarEntriesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /calendar-entries - list calendar entries.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {CalendarEntriesListQuery} [opts.query] - Query params (from, to required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/calendar-entries",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all
  };
}

module.exports = calendarEntriesFactory;