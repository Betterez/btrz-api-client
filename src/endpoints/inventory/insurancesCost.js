const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for insurances cost endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryInsurancesCostQuery
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
   * GET /insurances/:productId/cost - get insurance cost for product.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.productId - Product id
   * @param {*} opts.declaredValue - Declared value (merged into query)
   * @param {InventoryInsurancesCostQuery} [opts.query] - Optional query params (forwarded to API)
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
