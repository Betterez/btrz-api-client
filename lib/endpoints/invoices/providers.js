

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /providers (btrz-api-invoices). See providers get-handler getSpec().
 * @typedef {Object} ProvidersListQuery
 * @property {boolean} [enabled] - If the provider is enabled or not
 * @property {string} [invoiceProviderType] - The type of the provider
 * @property {string} [channel] - Filter by channel (must be one of the allowed channels)
 * @property {string} [country] - ISO code of the provider's country
 * @property {string} [operatingCompany] - Operating company id associated with the provider
 */

/**
 * Factory for invoice providers API (btrz-api-invoices).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */


function providersFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /providers — List invoice providers (paginated). Optional filters: enabled, invoiceProviderType, channel, country, operatingCompany.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {ProvidersListQuery} [opts.query] - Query params (all optional)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ providers: Object[], total?: number, ... }>>}
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/providers",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /providers/:id — Get a single invoice provider by ID.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {string} opts.id - Provider ID (24-character hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ provider: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_PROVIDER_ID
   * @throws 401 Unauthorized
   * @throws 404 PROVIDER_NOT_FOUND
   * @throws 500 Internal server error
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/providers/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * PUT /providers/:id — Update invoice provider. Body may be provider or body.provider. Emits webhook invoice_providers.updated on success.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {string} opts.id - Provider ID (24-character hex ObjectId)
   * @param {Object} opts.data - Request body (ProviderPutData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ provider: Object }>>}
   * @throws 400 INVALID_PHRASES, OPERATING_COMPANY_NOT_FOUND, CANNOT_CHANGE_PROVIDER, INVALID_IVA_AFFILIATION, CANT_REMOVE_*, INVALID_PARAM_VALUE, CANT_DELETE_DOCUMENT_TYPE_*
   * @throws 401 Unauthorized
   * @throws 404 PROVIDER_NOT_FOUND
   * @throws 500 Internal server error
   */
  function update(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const id = _ref4.id;
    const data = _ref4.data;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const headers = _ref4.headers;

    return client({
      url: `/providers/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  /**
   * DELETE /providers/:id — Remove invoice provider. Emits webhook invoice_providers.deleted on success.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {string} opts.id - Provider ID (24-character hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ providerId: string }>>}
   * @throws 400 WRONG_DATA, INVALID_PROVIDER_ID
   * @throws 401 Unauthorized
   * @throws 404 PROVIDER_NOT_FOUND
   * @throws 500 Internal server error
   */
  function remove(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const id = _ref5.id;
    const _ref5$query = _ref5.query;
    const query = _ref5$query === undefined ? {} : _ref5$query;
    const headers = _ref5.headers;

    return client({
      url: `/providers/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /providers — Create invoice provider. Body may be provider or body.provider (ProviderPostData). Emits webhook invoice_providers.created on success.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth (Authorization: Bearer)
   * @param {Object} opts.data - Request body (ProviderPostData: invoiceProviderType, currencies, params required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ provider: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_PHRASES, REQUIRED_PARAM_MISSING, INVALID_PARAM_VALUE, OPERATING_COMPANY_NOT_FOUND, INVALID_IVA_AFFILIATION
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function create(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const data = _ref6.data;
    const _ref6$query = _ref6.query;
    const query = _ref6$query === undefined ? {} : _ref6$query;
    const headers = _ref6.headers;

    return client({
      url: "/providers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = providersFactory;
