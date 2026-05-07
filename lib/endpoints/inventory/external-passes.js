"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /external-passes (btrz-api-inventory). See get-external-passes getSpec().
 * @typedef {Object} ExternalPassesListQuery
 * @property {string} [passNumber] - Filter by pass number
 * @property {string} [accountDisplayName] - Filter by Pay On Account name
 * @property {string} [expirationDateFrom] - Filter by expiration date >= (yyyy-mm-dd)
 * @property {string} [expirationDateTo] - Filter by expiration date <= (yyyy-mm-dd)
 * @property {string} [lastUpdatedAt] - Filter by last updated (ISO format)
 * @property {number} [page] - Page for pagination
 * @property {string} [orderBy] - Field to order by
 * @property {string} [orderDir] - asc (1) or desc (-1)
 * @property {number} [pageSize] - Results per page
 */

/**
 * Factory for external-passes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */


function externalPassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /external-passes - list external passes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ExternalPassesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/external-passes", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  /**
   * GET /external-passes/:externalPassId - get external pass by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.externalPassId - External pass id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var externalPassId = _ref3.externalPassId,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client.get("/external-passes/" + externalPassId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = externalPassesFactory;