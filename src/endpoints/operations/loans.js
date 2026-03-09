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
   * GET /loans - list loans for the account or provider. Paginated (20 per page). Requires operations API base URL.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization Bearer)
   * @param {LoansListQuery} [opts.query] - Query params (all optional): page, shiftId, type, trxId, status, providerId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ loans: Array<object>, count: number, next?: string, previous?: string }>>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/loans", {
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
   * GET /loans/:loanId - get a single loan by ID. Requires operations API base URL.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization Bearer)
   * @param {string} opts.loanId - Loan document ID (24 hex characters)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ loan: object }>>}
   */
  function get({
    loanId, token, jwtToken, headers
  }) {
    return client.get(`/loans/${loanId}`, {
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

module.exports = loansFactory;
