const {authorizationHeaders} = require("./../endpoints_helpers.js");

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

function appliedInsuranceFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /appliedInsurances - list applied insurances by transaction id (query: trxId).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.trxId - Transaction id (required, sent as query param)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, trxId, headers}) {
    const query = {trxId};

    return client({
      url: "/appliedInsurances",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {all};
}

module.exports = appliedInsuranceFactory;
