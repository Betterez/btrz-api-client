"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Body for POST /direct-trip-ids (btrz-api-inventory-trips). See TripIdPostData in post-handler getSpec().
 * @typedef {Object} TripIdPostData
 * @property {string} providerId - Provider id (24-char hex ObjectId)
 * @property {string} routeId - Route id (24-char hex ObjectId)
 * @property {string} scheduleId - Schedule id
 * @property {string} departureDate - Departure date (yyyy-mm-dd)
 * @property {string} fareIds - Fare ids and quantities (e.g. fareId:qty)
 * @property {string} channel - One of: backoffice, agency-backoffice, websales, agency-websales
 * @property {string} productId - Product id (24-char hex ObjectId)
 * @property {string} originId - Origin station id (24-char hex ObjectId)
 * @property {string} destinationId - Destination station id (24-char hex ObjectId)
 * @property {string} [currency] - ISO currency code (optional, for multicurrency)
 */

/**
 * Factory for trip-ids API (btrz-api-inventory-trips).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */


function tripIdsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /direct-trip-ids — Resolve trip parameters to a trip id. Runs trip search internally and returns the matching trip's base64 id (or null). Body can be TripIdPostData or { tripId: TripIdPostData }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {TripIdPostData|{ tripId: TripIdPostData }} opts.data - Trip parameters (or wrapped in tripId key)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ tripId: { tripId: string|null } }>>}
   * @throws 400 WRONG_DATA — tripId required or required fields missing
   * @throws 401 Unauthorized
   * @throws 404 TRIP_IDS_NOT_FOUND
   * @throws 500 Internal server error
   */
  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        data = _ref2.data,
        headers = _ref2.headers;

    return client({
      url: "/direct-trip-ids",
      method: "post",
      data: data,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    create: create
  };
}

module.exports = tripIdsFactory;