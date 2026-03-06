"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for applied-insurance API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} applied-insurance API methods
 */
/**
 * Query params for GET /appliedInsurances (btrz-api-operations). See get-applied-insurances getSpec().
 * Deprecated: use GET /transactions/:transactionId/applied-insurance.
 * @typedef {Object} AppliedInsurancesListQuery
 * @property {string} trxId - Associated transaction id (required)
 */

function appliedInsuranceFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /appliedInsurances - list applied insurances by transaction id (query: trxId).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.trxId - Transaction id (required, sent as query param)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        trxId = _ref2.trxId,
        headers = _ref2.headers;

    var query = { trxId: trxId };

    return client({
      url: "/appliedInsurances",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return { all: all };
}

module.exports = appliedInsuranceFactory;