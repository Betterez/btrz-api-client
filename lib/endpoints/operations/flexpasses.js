"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for flexpasses API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} flexpasses API methods
 */


function flexpassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * DELETE /flexpasses/:flexpassId/scannings/:tripId - deletes one flexpass scanning for the given trip ID.
   * Removes the scan matching tripId from the flexpass's scans; if multiple scans exist for the same tripId, only one is removed.
   * Requires operations API base URL (e.g. .../operations). No query parameters.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization Bearer)
   * @param {string} opts.flexpassId - Flexpass document ID (Mongo ObjectId string)
   * @param {string} opts.tripId - Trip identifier of the scan to remove (e.g. routeId_scheduleName_date)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ flexpassDeleted?: string }>>}
   */
  function deleteScanBytripId(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        flexpassId = _ref2.flexpassId,
        tripId = _ref2.tripId,
        headers = _ref2.headers;

    return client({
      url: "/flexpasses/" + flexpassId + "/scannings/" + tripId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    deleteScanBytripId: deleteScanBytripId
  };
}

module.exports = flexpassesFactory;