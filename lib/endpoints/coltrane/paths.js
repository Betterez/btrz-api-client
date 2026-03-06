"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /paths (btrz-api-coltrane).
 * @typedef {Object} ColtranePathsListQuery
 * @property {string} [providerId] - Provider id
 * @property {string} [productId] - Product id
 * @property {string} [originId] - Origin station id
 * @property {string} [destinationId] - Destination station id
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
   * @param {ColtranePathsListQuery} [opts.query] - Optional query params (forwarded to API)
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