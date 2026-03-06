const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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
function loansFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /loans - list loans.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {LoansListQuery} [opts.query] - Query params (all optional)
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
   * GET /loans/:loanId - get loan by id. API does not accept query params.
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
