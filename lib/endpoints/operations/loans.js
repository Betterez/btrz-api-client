"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /loans (btrz-api-operations). See loans get-handler getSpec().
 * @typedef {Object} LoansListQuery
 * @property {number} [page] - Page number (20 records per page)
 * @property {string} [shiftId] - Shift id (ObjectId format)
 * @property {string} [type] - "loan" | "re-payment"
 * @property {string} [trxId] - Transaction id (ObjectId format)
 * @property {string} [status] - Comma-separated statuses: created, paid, waiting for payment
 * @property {string} [providerId] - Provider id (for agencies)
 */

/**
 * Factory for loans API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} loans API methods
 */


function loansFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /loans - list loans for the account or provider. Paginated (20 per page). Requires operations API base URL.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization Bearer)
   * @param {LoansListQuery} [opts.query] - Query params (all optional): page, shiftId, type, trxId, status, providerId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ loans: Array<object>, count: number, next?: string, previous?: string }>>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/loans", {
      params: query,
      headers: authorizationHeaders({
        token: token,
        jwtToken: jwtToken,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  /**
   * GET /loans/:loanId - get a single loan by ID. Requires operations API base URL.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization Bearer)
   * @param {string} opts.loanId - Loan document ID (24 hex characters)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ loan: object }>>}
   */
  function get(_ref3) {
    var loanId = _ref3.loanId,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client.get("/loans/" + loanId, {
      headers: authorizationHeaders({
        token: token,
        jwtToken: jwtToken,
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

module.exports = loansFactory;