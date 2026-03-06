const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /sold-items list (btrz-api-operations). See get-handler getSpec().
 * @typedef {Object} SoldItemsListQuery
 * @property {number} [page] - Page number to retrieve
 * @property {string} [from] - Ticket manifest date from (yyyy-mm-dd; range max 31 days)
 * @property {string} [to] - Ticket manifest date to (yyyy-mm-dd; range max 31 days)
 */

/**
 * Query params for GET /sold-items/:soldItemId (btrz-api-operations). See get-by-id-handler getSpec().
 * @typedef {Object} SoldItemsGetQuery
 * @property {string} [providerId] - Provider account id (ObjectId)
 */

/**
 * Factory for sold-items API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} sold-items API methods
 */
function soldItems({client, internalAuthTokenProvider}) {
  /**
   * GET /sold-items/:soldItemId - get sold item by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.soldItemId - Sold item id
   * @param {SoldItemsGetQuery} [opts.query] - Optional query (providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, soldItemId, headers, query}) {
    return client.get(`/sold-items/${soldItemId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /sold-items - list sold items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {SoldItemsListQuery} [opts.query] - Query params (page, from, to)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, headers, query}) {
    return client.get("/sold-items", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = soldItems;
