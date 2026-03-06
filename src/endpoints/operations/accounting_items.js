const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

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
function accountingItemsFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /accounting-items - list accounting items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {AccountingItemsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/accounting-items", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
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
  function get({
    accountingItemId, token, headers
  }) {
    return client.get(`/accounting-items/${accountingItemId}`, {
      headers: authorizationHeaders({
        token,
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
