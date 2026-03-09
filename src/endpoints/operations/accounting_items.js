const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Query params for GET /accounting-items (btrz-api-operations). See accounting-items get-handler getSpec().
 * @typedef {Object} AccountingItemsListQuery
 * @property {number} [page] - Page number (20 records per page)
 * @property {string} [shiftId] - Shift id (ObjectId format)
 * @property {string} [type] - "account_payable" | "account_receivable"
 * @property {string} [trxId] - Transaction id (ObjectId format)
 * @property {string} [status] - Comma-separated statuses: created, paid, waiting for payment
 */

/**
 * Factory for accounting-items API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} accounting-items API methods
 */
function accountingItemsFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /accounting-items - list accounting items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {AccountingItemsListQuery} [opts.query] - Query params (all optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/accounting-items", {
      params: query,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * GET /accounting-items/:accountingItemId - get accounting item by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.accountingItemId - Accounting item id (ObjectId format)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    accountingItemId, token, jwtToken, headers
  }) {
    return client.get(`/accounting-items/${accountingItemId}`, {
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    all,
    get
  };
}

module.exports = accountingItemsFactory;
