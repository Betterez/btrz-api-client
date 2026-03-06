const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} LoansQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for loans API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} loans API methods
 */
function loansFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /loans - list loans.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {LoansQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/loans", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * GET /loans/:loanId - get loan by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.loanId - Loan id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    loanId, token, headers
  }) {
    return client.get(`/loans/${loanId}`, {
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

module.exports = loansFactory;
