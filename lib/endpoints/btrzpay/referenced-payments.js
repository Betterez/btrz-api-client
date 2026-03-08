"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        transactionId = _ref2.transactionId,
        referenceNumber = _ref2.referenceNumber,
        headers = _ref2.headers;

    return client.get("/referenced-payments/" + transactionId + "/" + referenceNumber + "/status", {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        externalType = _ref3.externalType,
        referenceNumber = _ref3.referenceNumber,
        paymentResult = _ref3.paymentResult,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/referenced-payments/" + externalType + "/" + referenceNumber + "/results",
      method: "post",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, headers: headers }),
      data: { paymentResult: paymentResult }
    });
  }

  return {
    getStatus: getStatus,
    update: update
  };
}

module.exports = referencedPaymentsFactory;