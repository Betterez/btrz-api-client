"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /bare-routes (btrz-api-inventory). See get-bare-routes getSpec().
 * @typedef {Object} BareRoutesListQuery
 * @property {string} [providerIds] - Comma-separated provider IDs
 * @property {string} [productIds] - Comma-separated product IDs
 */

/**
 * Query params for GET /bare-routes/:routeId (btrz-api-inventory). See get-bare-routes-id getSpec().
 * @typedef {Object} BareRoutesGetQuery
 * @property {string} [providerIds] - Comma-separated provider IDs
 */

/**
 * Factory for bare-routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */


function bareRoutesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /bare-routes - list bare routes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {BareRoutesListQuery} [opts.query] - Query params (providerIds, productIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/bare-routes",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /bare-routes/:routeId - get bare route by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {BareRoutesGetQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var routeId = _ref3.routeId,
        token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/bare-routes/" + routeId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = bareRoutesFactory;