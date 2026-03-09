"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /items (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} ItemsQuery
 * @property {string} [productId] - The ids of the products to get products for
 * @property {string} [associatedProductId] - The id of the associated products when used as an SSR
 * @property {string} [disabled] - Filter by disabled: "true" | "false"
 * @property {string} [type] - Filter by type: "paid_in" | "paid_out"
 * @property {string} [providerIds] - The id of the provider to get products for
 * @property {string} [filterToCurrentShiftLocation] - Filter items sellable in current location: "true" | "false". Requires JwtAuth
 * @property {string} [channels] - Filter by channels (comma-separated, e.g. "backoffice,websales"). Requires JwtAuth
 * @property {string} [currency] - The isocode of the selected currency
 */

/**
 * Query params for GET /items/:itemId (btrz-api-inventory). See get-by-id-handler getSpec().
 * @typedef {Object} ItemByIdQuery
 * @property {string} [currency] - The isocode of the selected currency
 */

/**
 * Factory for items API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, tickets: object }}
 */


function itemsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /items - list items (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ItemsQuery} [opts.query] - Query params (productId, disabled, type, providerIds, channels, currency, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ items: Object[], next?: string, previous?: string, count: number }>>}
   * @throws 401; 500.
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/items",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /items/:itemId - get item by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.itemId - Item id (24 hex characters)
   * @param {ItemByIdQuery} [opts.query] - Query params (currency)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ item: Object }>>}
   * @throws 400 INVALID_ITEM_ID; 401; 404 ITEM_NOT_FOUND; 500.
   */
  function get(_ref3) {
    var itemId = _ref3.itemId,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/items/" + itemId, {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /items - create item.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.item - Item payload (ItemPostData: name, productId, type, amount, valueType, order, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ item: Object }>>}
   * @throws 400 WRONG_DATA, PRODUCT_ID_INVALID, etc.; 401; 404 PRODUCT_NOT_FOUND, etc.; 500.
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        item = _ref4.item,
        token = _ref4.token,
        headers = _ref4.headers;

    return client({
      url: "/items",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { item: item }
    });
  }

  /**
   * PUT /items/:itemId - update item.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.itemId - Item id (24 hex characters)
   * @param {Object} opts.item - Item payload (ItemPostData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ item: Object }>>}
   * @throws 400 WRONG_DATA, INVALID ids; 401; 404 ITEM_NOT_FOUND, PRODUCT_NOT_FOUND, etc.; 500.
   */
  function update(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        itemId = _ref5.itemId,
        item = _ref5.item,
        headers = _ref5.headers;

    return client({
      url: "/items/" + itemId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { item: item }
    });
  }

  /** @type {{ update: function }} */
  var tickets = {
    /**
     * PUT /items/:soldItemId/tickets/:ticketId - update ticket.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.soldItemId - Sold item id
     * @param {string} opts.ticketId - Ticket id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref6) {
      var jwtToken = _ref6.jwtToken,
          token = _ref6.token,
          soldItemId = _ref6.soldItemId,
          ticketId = _ref6.ticketId,
          headers = _ref6.headers,
          query = _ref6.query;

      return client({
        url: "/items/" + soldItemId + "/tickets/" + ticketId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    tickets: tickets
  };
}

module.exports = itemsFactory;