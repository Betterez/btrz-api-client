const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function productsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /products - list products.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ProductsListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/products",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
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
  function get({productId, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/products/${productId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
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
  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/products",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
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
  function update({productId, data, token, jwtToken, headers}) {
    return client({
      url: `/products/${productId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /** @type {{ remove: function }} */
  const domains = {
    /**
     * DELETE /products/domains/:domain - remove product domain. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.domain - Domain
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: ({token, jwtToken, domain, headers}) => {
      return client({
        url: `/products/domains/${domain}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  /** @type {{ all: function }} */
  const families = {
    /**
     * GET /products/families - list product families. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: ({token, query = {}, headers}) => {
      return client({
        url: "/products/families",
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    families,
    domains
  };
}

module.exports = productsFactory;
