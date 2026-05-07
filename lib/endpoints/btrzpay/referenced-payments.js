

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query for POST .../referenced-payments/:type/:referenceNumber/results (btrz-api-payments). See post-referenced-payments getSpec().
 * @typedef {Object} ReferencedPaymentsUpdateQuery
 * @property {string} [includePaidOrExpired] - Update beyond paid/expired for completion [true, false]
 */

/**
 * Factory for referenced payments API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getStatus: function, update: function }}
 */


function referencedPaymentsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /referenced-payments/:transactionId/:referenceNumber/status - get referenced payment status. Requires backoffice auth. Response body: { paymentResult: { status, result } | null }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.transactionId - Transaction ID
   * @param {string} opts.referenceNumber - Reference number of the payment
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ paymentResult: { status: "error"|"pending"|"success"|"review", result: object } | null }>>}
   */
  function getStatus(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const transactionId = _ref2.transactionId;
    const referenceNumber = _ref2.referenceNumber;
    const headers = _ref2.headers;

    return client.get(`/referenced-payments/${transactionId}/${referenceNumber}/status`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /referenced-payments/:externalType/:referenceNumber/results - update payment result.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.externalType - External type
   * @param {string} opts.referenceNumber - Reference number
   * @param {Object} opts.paymentResult - Payment result payload
   * @param {ReferencedPaymentsUpdateQuery} [opts.query] - Query params (includePaidOrExpired)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const externalType = _ref3.externalType;
    const referenceNumber = _ref3.referenceNumber;
    const paymentResult = _ref3.paymentResult;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/referenced-payments/${externalType}/${referenceNumber}/results`,
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, headers}),
      data: {paymentResult}
    });
  }

  return {
    getStatus,
    update
  };
}

module.exports = referencedPaymentsFactory;
