

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /sold-items/fulfillment (btrz-api-operations). See 01-get-fulfillment-handler getSpec().
 * @typedef {Object} SoldItemsFulfillmentListQuery
 * @property {string} soldItemIds - Comma-separated sold item IDs (required)
 */

/**
 * Factory for sold-items fulfillment API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} sold-items fulfillment API methods
 */


function soldItemsFulfillmentFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /sold-items/fulfillment - list sold items fulfillment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SoldItemsFulfillmentListQuery} [opts.query] - Query params (soldItemIds required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/sold-items/fulfillment", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = soldItemsFulfillmentFactory;
