"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for sync-entry API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ patch: function }}
 */


function syncEntryFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * PATCH /sync-entry - patch sync entry. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.data - Request body
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch(_ref2) {
    var token = _ref2.token,
        data = _ref2.data,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/sync-entry",
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    patch: patch
  };
}

module.exports = syncEntryFactory;