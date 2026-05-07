

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function insurancesCostFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function get(_ref2) {
    const token = _ref2.token;
    const productId = _ref2.productId;
    const declaredValue = _ref2.declaredValue;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
