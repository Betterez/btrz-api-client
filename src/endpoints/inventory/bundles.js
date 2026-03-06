const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /bundles (btrz-api-inventory). See get-bundles getSpec().
 * @typedef {Object} InventoryBundlesQuery
 * @property {string} [providerId] - Provider account ID
 * @property {string} [type] - Bundle type filter
 * @property {string} [disabled] - Filter by disabled status
 */

/**
 * Factory for bundles API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */
function bundlesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /bundles - list bundles.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryBundlesQuery} [opts.query] - Query params (providerId, type, disabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/bundles",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /bundles/:bundleId - get bundle by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.bundleId - Bundle id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, bundleId, headers}) {
    return client({
      url: `/bundles/${bundleId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = bundlesFactory;
