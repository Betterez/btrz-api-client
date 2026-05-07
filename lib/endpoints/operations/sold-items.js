

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function soldItems(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const soldItemId = _ref2.soldItemId;
    const headers = _ref2.headers;
    const query = _ref2.query;

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
  function all(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const headers = _ref3.headers;
    const query = _ref3.query;

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
