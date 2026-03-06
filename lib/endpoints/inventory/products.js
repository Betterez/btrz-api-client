"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /products (btrz-api-inventory). See get-products getSpec().
 * @typedef {Object} ProductsListQuery
 * @property {string} [providerIds] - Provider IDs to get products for
 * @property {string} [channels] - Filter by channels
 * @property {string} [enabled] - 'true', 'false' or 'any' (default 'true')
 * @property {string} [pricingType] - One of point-to-point, distance, journey, etc.
 * @property {string} [hasRoutes] - 'true' or 'false' (deprecated, use family)
 * @property {string} [hasDates] - 'true' or 'false' (deprecated)
 * @property {string} [hasPassengerInfo] - 'true' or 'false' (deprecated)
 * @property {string} [isParcel] - 'true' or 'false' (deprecated)
 * @property {string} [family] - One of bundle, parcel, paid in, paid out, reservation, flexpass, ticket
 * @property {string} [domain] - Filter by domain
 * @property {string} [parentProductId] - Child products of this parent
 * @property {string} [dynamicFormId] - Filter by dynamic form
 */

/**
 * Query params for GET /products/:productId (btrz-api-inventory). See get-products-id getSpec().
 * @typedef {Object} ProductGetQuery
 * @property {string} [providerIds] - Provider IDs to get product for
 * @property {string} [channels] - Filter by channels
 * @property {string} [enabled] - 'true', 'false' or 'any'
 */

/**
 * Factory for products API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, families: object, domains: object }}
 */


function productsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /products - list products.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ProductsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/products",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /products/:productId - get product by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id
   * @param {ProductGetQuery} [opts.query] - Query params (providerIds, channels, enabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var productId = _ref3.productId,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/products/" + productId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  /**
   * POST /products - create product. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Product payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var data = _ref4.data,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/products",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * PUT /products/:productId - update product. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id
   * @param {Object} opts.data - Product payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    var productId = _ref5.productId,
        data = _ref5.data,
        token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/products/" + productId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /** @type {{ remove: function }} */
  var domains = {
    /**
     * DELETE /products/domains/:domain - remove product domain. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.domain - Domain
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          domain = _ref6.domain,
          headers = _ref6.headers;

      return client({
        url: "/products/domains/" + domain,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  /** @type {{ all: function }} */
  var families = {
    /**
     * GET /products/families - list product families. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref7) {
      var token = _ref7.token,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          headers = _ref7.headers;

      return client({
        url: "/products/families",
        params: query,
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    families: families,
    domains: domains
  };
}

module.exports = productsFactory;