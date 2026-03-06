"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} PayOnAccountsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for pay-on-accounts API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function payOnAccountsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /pay-on-accounts - list pay-on accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PayOnAccountsQuery} [opts.query] - Query params
   * @param {string} [opts.responseType] - Response type (e.g. json)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        _ref2$responseType = _ref2.responseType,
        responseType = _ref2$responseType === undefined ? "json" : _ref2$responseType,
        headers = _ref2.headers;

    return client.get("/pay-on-accounts", {
      params: query,
      responseType: responseType,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all
  };
}

module.exports = payOnAccountsFactory;