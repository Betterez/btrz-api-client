const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function referencedPaymentsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /referenced-payments/:transactionId/:referenceNumber/status - get status. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.transactionId - Transaction id
   * @param {string} opts.referenceNumber - Reference number
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getStatus({token, jwtToken, transactionId, referenceNumber, headers}) {
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
  function update({token, jwtToken, externalType, referenceNumber, paymentResult, query = {}, headers}) {
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
