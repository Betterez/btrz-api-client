function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

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
function documentTypesFactory({
  client,
  internalAuthTokenProvider
}) {
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
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client({
      url: "/document-types",
      method: "get",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
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
   * @param {string} [opts.providerId] - Provider id (ObjectId); merged into
   * query for provider context (same as peopleLookups.getById / dynamicForms.get)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ documenttype: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 DOCUMENTTYPE_NOT_FOUND, 500)
   */
  function get({
    token,
    jwtToken,
    id,
    query = {},
    headers,
    providerId
  }) {
    const query_ = providerId ? _objectSpread(_objectSpread({}, query), {}, {
      providerId
    }) : query;
    return client({
      url: `/document-types/${id}`,
      method: "get",
      params: query_,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function update({
    token,
    jwtToken,
    id,
    documenttype,
    data,
    headers
  }) {
    const payload = documenttype || data;
    return client({
      url: `/document-types/${id}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        documenttype: payload
      }
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
  function remove({
    token,
    jwtToken,
    id,
    headers
  }) {
    return client({
      url: `/document-types/${id}`,
      method: "delete",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
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
  function create({
    token,
    jwtToken,
    documenttype,
    data,
    headers
  }) {
    const payload = documenttype || data;
    return client({
      url: "/document-types",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        documenttype: payload
      }
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