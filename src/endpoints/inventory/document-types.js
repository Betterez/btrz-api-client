const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function documentTypesFactory({client, internalAuthTokenProvider}) {
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
  function all({token, jwtToken, query = {}, headers}) {
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
  function get({token, jwtToken, id, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
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
  function update({token, jwtToken, id, documenttype, data, headers}) {
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
  function remove({token, jwtToken, id, headers}) {
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
  function create({token, jwtToken, documenttype, data, headers}) {
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
