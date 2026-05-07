

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function brandsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /brands - list brands.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {BrandsListQuery} [opts.query] - Query params (providerIds, enabled, page, pageSize)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const brand = _ref3.brand;
    const headers = _ref3.headers;

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
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const brandId = _ref4.brandId;
    const brand = _ref4.brand;
    const headers = _ref4.headers;

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
  function get(_ref5) {
    const token = _ref5.token;
    const brandId = _ref5.brandId;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

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
