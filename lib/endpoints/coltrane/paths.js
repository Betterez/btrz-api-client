"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /paths (btrz-api-coltrane). See get-paths getSpec().
 * @typedef {Object} ColtranePathsListQuery
 * @property {string} [providerId] - Account ID of the travel provider (required by API)
 * @property {string} [productId] - Product ID belonging to the provider (required by API)
 * @property {string} [originId] - Origin station id (required by API)
 * @property {string} [destinationId] - Destination station id (required by API)
 * @property {string} [departureFromDate] - Start of search interval; ISO 8601 (e.g. 2021-10-07T17:30:00.000-0400)
 * @property {string} [departureToDate] - End of search interval; ISO 8601; interval max 25h
 * @property {string} [metrics] - If true, response includes metrics (debugging)
 */

/**
 * Factory for Coltrane paths API (btrz-api-coltrane).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function coltraneFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /paths - list Coltrane paths.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {ColtranePathsListQuery} [opts.query] - Query params (providerId, productId, originId, destinationId, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/paths",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all
  };
}

module.exports = coltraneFactory;