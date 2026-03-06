const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function soldItemsFulfillmentFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /sold-items/fulfillment - list sold items fulfillment.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SoldItemsFulfillmentListQuery} [opts.query] - Query params (soldItemIds required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
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
