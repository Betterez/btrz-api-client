"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /ssrs (btrz-api-inventory). See get-ssrs getSpec().
 * @typedef {Object} SsrsListQuery
 * @property {string} [providerIds] - Provider ids to get SSRs for
 * @property {string} [travelDate] - Travel date (yyyy-mm-dd)
 * @property {string} [travelTime] - Travel time (HH:MM); required if travelDate provided
 * @property {string} [tripId] - Trip id to get SSRs for
 * @property {string} [productIds] - Product type ids
 * @property {string} [enabled] - Filter enabled/disabled [true, false]
 * @property {string} [currency] - Currency ISO code
 * @property {string} [brandIds] - Trip brand ids
 */

/**
 * Factory for ssrs API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function ssrsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /ssrs - list SSRs.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {SsrsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/ssrs", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all
  };
}

module.exports = ssrsFactory;