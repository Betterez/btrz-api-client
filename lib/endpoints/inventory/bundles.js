"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /bundles (btrz-api-inventory). See get-bundles getSpec().
 * @typedef {Object} InventoryBundlesQuery
 * @property {string} [providerId] - Provider account ID
 * @property {string} [type] - Bundle type filter
 * @property {string} [disabled] - Filter by disabled status
 */

/**
 * Factory for bundles API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */


function bundlesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /bundles - list bundles.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryBundlesQuery} [opts.query] - Query params (providerId, type, disabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/bundles",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /bundles/:bundleId - get bundle by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.bundleId - Bundle id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        bundleId = _ref3.bundleId,
        headers = _ref3.headers;

    return client({
      url: "/bundles/" + bundleId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = bundlesFactory;