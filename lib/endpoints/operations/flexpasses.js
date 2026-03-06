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
   * DELETE /flexpasses/:flexpassId/scannings/:tripId - delete scan by trip id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.flexpassId - Flexpass id
   * @param {string} opts.tripId - Trip id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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