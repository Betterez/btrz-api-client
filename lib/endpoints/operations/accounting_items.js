"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * @typedef {Object} AccountingItemsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for accounting-items API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} accounting-items API methods
 */


function accountingItemsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /accounting-items - list accounting items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {AccountingItemsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/accounting-items", {
      params: query,
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  /**
   * GET /accounting-items/:accountingItemId - get accounting item by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.accountingItemId - Accounting item id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var accountingItemId = _ref3.accountingItemId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/accounting-items/" + accountingItemId, {
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = accountingItemsFactory;