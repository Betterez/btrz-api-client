"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /outlook-trips (btrz-api-operations). See get-outlook-trips getSpec().
 * @typedef {Object} OutlookTripsListQuery
 * @property {string} from - Travel start date (required, date format)
 * @property {string} to - Travel end date (required, date format)
 * @property {string} [fromTime] - Cutoff time for first date (HH:MM)
 * @property {string} [toTime] - Cutoff time for last date (HH:MM)
 * @property {string} productId - Product ID (required)
 * @property {string} [originId] - Origin (departure) station ID
 * @property {string} [destinationId] - Destination station ID
 * @property {string} [routeId] - Route ID
 * @property {string} [scheduleId] - Schedule ID
 * @property {boolean} [isExtraRun] - Only trips marked as extra run
 */

/**
 * Factory for outlook-trips API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} outlook-trips API methods
 */


function outlookTripsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /outlook-trips - get outlook trips.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OutlookTripsListQuery} [opts.query] - Query params (from, to, productId required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/outlook-trips",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  return {
    get: get
  };
}

module.exports = outlookTripsFactory;