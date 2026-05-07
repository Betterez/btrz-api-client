"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} CurrentShiftsQuery
 * @property {string} [includeActivity] - Set to 'false' to avoid returning sales activity data for the shift (default 'true')
 */

/**
 * Factory for current-shift (per user) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function currentShiftsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /users/:userId/current-shift - get current shift for user.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.userId - User id (ObjectId)
   * @param {CurrentShiftsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        userId = _ref2.userId,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/users/" + userId + "/current-shift", {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  return {
    get: get
  };
}

module.exports = currentShiftsFactory;