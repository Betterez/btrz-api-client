"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /waitlists (btrz-api-operations getSpec).
 * @typedef {Object} WaitlistsListQuery
 * @property {number} [page] - Page number to return (20 records per page)
 * @property {string} [originId] - Filter by origin id (24 hex chars)
 * @property {string} [destinationId] - Filter by destination id (24 hex chars)
 * @property {string} [dateOfTravelStr] - Filter by date of travel (YYYY-MM-DD)
 */

/**
 * Factory for waitlists API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} waitlists API methods
 */


function waitlistsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /waitlists - list waitlists.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {WaitlistsListQuery} [opts.query] - page, originId, destinationId, dateOfTravelStr
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} GetWaitlistsResponse; 400 INVALID_ORIGIN_ID, INVALID_DESTINATION_ID, INVALID_DATE_OF_TRAVEL_STR
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/waitlists",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  /**
   * GET /waitlists/:waitlistId - get waitlist by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.waitlistId - Waitlist id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        waitlistId = _ref3.waitlistId,
        headers = _ref3.headers;

    return client({
      url: "/waitlists/" + waitlistId,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * DELETE /waitlists/:waitlistId - remove waitlist.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.waitlistId - Waitlist id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        waitlistId = _ref4.waitlistId,
        headers = _ref4.headers;

    return client({
      url: "/waitlists/" + waitlistId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /waitlists - create waitlist.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Waitlist payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/waitlists",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    all: all,
    get: get,
    remove: remove,
    create: create
  };
}

module.exports = waitlistsFactory;