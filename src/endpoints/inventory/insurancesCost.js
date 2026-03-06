const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /insurances/:productId/cost (btrz-api-inventory). See GetInsuranceCostsHandler getSpec().
 * Client merges opts.declaredValue into query.
 * @typedef {Object} InsurancesCostQuery
 * @property {*} declaredValue - Declared value (required by API; may be passed as opts.declaredValue)
 * @property {string} [providerId] - Provider id
 */

/**
 * Factory for insurances cost API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function insurancesCostFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /insurances/:productId/cost - get insurance cost for product. Client merges opts.declaredValue into query.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.productId - Product id
   * @param {*} opts.declaredValue - Declared value (required; merged into query)
   * @param {InsurancesCostQuery} [opts.query] - Additional query params (e.g. providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    token, productId, declaredValue, query = {}, headers
  }) {
    return client.get(`/insurances/${productId}/cost`, {
      params: Object.assign(query, {declaredValue}),
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = insurancesCostFactory;
