"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/document-types",
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers,
        providerId = _ref3.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/document-types/" + id,
      method: "get",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        documenttype = _ref4.documenttype,
        data = _ref4.data,
        headers = _ref4.headers;

    var payload = documenttype || data;
    return client({
      url: "/document-types/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { documenttype: payload }
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
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        headers = _ref5.headers;

    return client({
      url: "/document-types/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        documenttype = _ref6.documenttype,
        data = _ref6.data,
        headers = _ref6.headers;

    var payload = documenttype || data;
    return client({
      url: "/document-types",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { documenttype: payload }
    });
  }

  return {
    all: all,
    get: get,
    update: update,
    remove: remove,
    create: create
  };
}

module.exports = documentTypesFactory;