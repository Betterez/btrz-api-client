

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /document-types (btrz-api-inventory).
 * @typedef {Object} DocumentTypesListQuery
 * @property {string} [providerIds] - Comma-separated provider IDs to get document types for
 */

/**
 * Query params for GET /document-types/:documenttypeId (btrz-api-inventory). See get-by-id-handler getSpec().
 * @typedef {Object} DocumentTypeGetByIdQuery
 * @property {string} [providerId] - When passed via opts.providerId it is merged here (same pattern as people-lookups / dynamic-forms)
 */

/**
 * Factory for document-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */


function documentTypesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /document-types - list document types (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {DocumentTypesListQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ documenttypes: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (401 Unauthorized, 500)
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/document-types",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /document-types/:documenttypeId - get document type by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Document type id (24 hex characters)
   * @param {DocumentTypeGetByIdQuery} [opts.query] - Optional query params (merged with providerId when opts.providerId is set)
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into query for provider context (same as peopleLookups.getById / dynamicForms.get)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ documenttype: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 DOCUMENTTYPE_NOT_FOUND, 500)
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;
    const providerId = _ref3.providerId;

    const query_ = providerId ? _extends({}, query, {providerId}) : query;
    return client({
      url: `/document-types/${id}`,
      method: "get",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /document-types/:documenttypeId - update document type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Document type id
   * @param {Object} [opts.documenttype] - Document type payload (DocumentTypePutData)
   * @param {Object} [opts.data] - Alias for documenttype (deprecated, use documenttype)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ documenttype: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404, 409 CANNOT_UPDATE_LEXICON_ENTRIES, 500)
   */
  function update(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const id = _ref4.id;
    const documenttype = _ref4.documenttype;
    const data = _ref4.data;
    const headers = _ref4.headers;

    const payload = documenttype || data;
    return client({
      url: `/document-types/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {documenttype: payload}
    });
  }

  /**
   * DELETE /document-types/:documenttypeId - remove document type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Document type id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ documenttypeId: string }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 DOCUMENTTYPE_NOT_FOUND, 500)
   */
  function remove(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const id = _ref5.id;
    const headers = _ref5.headers;

    return client({
      url: `/document-types/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /document-types - create document type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.documenttype] - Document type payload (DocumentTypePostData)
   * @param {Object} [opts.data] - Alias for documenttype (deprecated, use documenttype)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ documenttype: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 409 CANNOT_CREATE_LEXICON_ENTRIES, 500)
   */
  function create(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const documenttype = _ref6.documenttype;
    const data = _ref6.data;
    const headers = _ref6.headers;

    const payload = documenttype || data;
    return client({
      url: "/document-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {documenttype: payload}
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

module.exports = documentTypesFactory;
