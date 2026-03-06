const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} SoldItemsQuery
 * @property {string} [providerId] - Provider account ID
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
   * @param {Object} [opts.headers] - Optional headers
   * @param {SoldItemsQuery} [opts.query] - Query params
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
   * @param {Object} [opts.headers] - Optional headers
   * @param {SoldItemsQuery} [opts.query] - Query params
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
