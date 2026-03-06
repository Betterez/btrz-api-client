const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /brands (btrz-api-inventory). See get-brands getSpec().
 * @typedef {Object} BrandsListQuery
 * @property {string} [providerIds] - Comma-separated provider IDs
 * @property {string} [enabled] - Filter by enabled status
 * @property {number} [page] - Page for pagination
 * @property {number} [pageSize] - Results per page
 */

/**
 * Factory for brands API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */
function brandsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /brands - list brands.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {BrandsListQuery} [opts.query] - Query params (providerIds, enabled, page, pageSize)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/brands",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /brands - create brand. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.brand - Brand payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, brand, headers}) {
    return client({
      url: "/brands",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {brand}
    });
  }

  /**
   * PUT /brands/:brandId - update brand. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.brandId - Brand id
   * @param {Object} opts.brand - Brand payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, brandId, brand, headers}) {
    return client({
      url: `/brands/${brandId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {brand}
    });
  }

  /**
   * GET /brands/:brandId - get brand by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.brandId - Brand id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, brandId, jwtToken, headers}) {
    return client({
      url: `/brands/${brandId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    create,
    update,
    get
  };
}

module.exports = brandsFactory;
