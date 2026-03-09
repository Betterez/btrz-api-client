const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /marital-status (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} MaritalStatusListQuery
 * @property {string} [providerIds] - Provider IDs to get marital status for
 */

/**
 * Factory for marital-status API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */
function maritalStatusFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /marital-status - list marital statuses (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {MaritalStatusListQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ maritalstatus: Object[], next?: string, previous?: string, count: number }>>}
   * @throws 401; 500.
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/marital-status",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /marital-status/:id - get marital status by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Marital status id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ maritalstatus: Object }>>}
   * @throws 400 WRONG_DATA, INVALID_MARITALSTATUS_ID; 401; 404 MARITALSTATUS_NOT_FOUND; 500.
   */
  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/marital-status/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * PUT /marital-status/:id - update marital status. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Marital status id (24 hex characters)
   * @param {Object} opts.data - Request body (MaritalStatusPutData: name, ord, lexiconKeys)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ maritalstatus: Object }>>}
   * @throws 400 WRONG_DATA; 401; 404 MARITALSTATUS_NOT_FOUND; 409 CANNOT_UPDATE_LEXICON_ENTRIES; 500.
   */
  function update({token, jwtToken, id, data, query = {}, headers}) {
    return client({
      url: `/marital-status/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  /**
   * DELETE /marital-status/:id - remove marital status. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Marital status id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ maritalstatusId: string }>>}
   * @throws 400 WRONG_DATA, INVALID_MARITALSTATUS_ID; 401; 404 MARITALSTATUS_NOT_FOUND; 500.
   */
  function remove({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/marital-status/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /marital-status - create marital status. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body (MaritalStatusPostData: name, ord, lexiconKeys required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ maritalstatus: Object }>>}
   * @throws 400 WRONG_DATA (maritalstatus/name/ord/lexiconKeys required); 401; 409 CANNOT_CREATE_LEXICON_ENTRIES; 500.
   */
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/marital-status",
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

module.exports = maritalStatusFactory;
