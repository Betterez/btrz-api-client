"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /pay-on-accounts (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} PayOnAccountsListQuery
 * @property {number} [page] - Page number
 * @property {string} [format] - Format to retrieve the data
 * @property {string} [disabled] - Filter by disabled [true, false]
 * @property {string} [term] - Search term to filter PayOnAccounts
 * @property {string} [fareIds] - Fare ids to filter
 * @property {string} [providerId] - Provider id to filter
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
   * GET /pay-on-accounts - list pay-on accounts. When format=csv returns CSV (text/csv); otherwise JSON with pagination.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PayOnAccountsListQuery} [opts.query] - Query params (page, format, disabled, term, fareIds, providerId)
   * @param {string} [opts.responseType] - Response type (e.g. json); use for CSV when format=csv
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ payOnAccounts: Object[], next?: string, previous?: string, count: number }|string>>}
   * @throws When the request fails (400 INVALID_PAGE/INVALID_FARE_IDS/INVALID_PROVIDER_ID/INVALID_SEARCH_TERM, 401, 500)
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