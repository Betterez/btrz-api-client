

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /operation-reasons (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} OperationReasonsListQuery
 * @property {number} [page] - The page number to retrieve
 */

/**
 * Factory for operation-reasons API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */


function operationReasonFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /operation-reasons - list operation reasons.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {OperationReasonsListQuery} [opts.query] - Query params (page)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationReasons: Object[], next?: string, previous?: string, count: number }>>}
   * @throws When the request fails (e.g. 400 INVALID_PAGE, 401 Unauthorized, 500)
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/operation-reasons",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /operation-reasons/:id - get operation reason by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Operation reason id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationReason: Object }>>}
   * @throws When the request fails (400 INVALID_OPERATION_REASON_ID, 401, 404 OPERATION_REASON_NOT_FOUND, 500)
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const id = _ref3.id;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/operation-reasons/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * PUT /operation-reasons/:id - update operation reason. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Operation reason id (24-char hex ObjectId)
   * @param {Object} opts.operationReason - Operation reason payload (name, type, lexiconKeys, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationReason: Object }>>}
   * @throws When the request fails (400 WRONG_DATA/INVALID_OPERATION_REASON_ID, 401, 404, 500)
   */
  function update(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const id = _ref4.id;
    const operationReason = _ref4.operationReason;
    const _ref4$query = _ref4.query;
    const query = _ref4$query === undefined ? {} : _ref4$query;
    const headers = _ref4.headers;

    return client({
      url: `/operation-reasons/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {operationReason}
    });
  }

  /**
   * DELETE /operation-reasons/:id - remove operation reason. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Operation reason id (24-char hex ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ _id: string }>>}
   * @throws When the request fails (400 INVALID_OPERATION_REASON_ID, 401, 404 OPERATION_REASON_NOT_FOUND, 500)
   */
  function remove(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const id = _ref5.id;
    const _ref5$query = _ref5.query;
    const query = _ref5$query === undefined ? {} : _ref5$query;
    const headers = _ref5.headers;

    return client({
      url: `/operation-reasons/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /operation-reasons - create operation reason. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.operationReason - Operation reason payload (name, type, lexiconKeys required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationReason: Object }>>}
   * @throws When the request fails (400 WRONG_DATA, 401, 409 CANNOT_CREATE_LEXICON_ENTRIES, 500)
   */
  function create(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const operationReason = _ref6.operationReason;
    const _ref6$query = _ref6.query;
    const query = _ref6$query === undefined ? {} : _ref6$query;
    const headers = _ref6.headers;

    return client({
      url: "/operation-reasons",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {operationReason}
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

module.exports = operationReasonFactory;
