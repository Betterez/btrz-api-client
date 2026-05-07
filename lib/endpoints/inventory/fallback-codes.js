

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fallback-codes (btrz-api-inventory). See get-fallback-codes getSpec().
 * @typedef {Object} FallbackCodesListQuery
 * @property {string} [enabled] - Filter by enabled [true, false]
 * @property {string} [lastUpdatedAt] - Filter by last updated (yyyy-mm-ddTHH:mm:ss.SSSZ)
 */

/**
 * Factory for fallback-codes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */


function fallbackCodesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fallback-codes - list fallback codes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {FallbackCodesListQuery} [opts.query] - Query params (enabled, lastUpdatedAt)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/fallback-codes", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /fallback-code/:id - get fallback code by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.id - Fallback code id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    const token = _ref3.token;
    const id = _ref3.id;
    const headers = _ref3.headers;

    return client.get(`/fallback-code/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /fallback-codes - create fallback code. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fallbackCode - Fallback code payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const fallbackCode = _ref4.fallbackCode;
    const headers = _ref4.headers;

    return client({
      url: "/fallback-codes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fallbackCode}
    });
  }

  /**
   * PUT /fallback-code/:fallbackCodeId - update fallback code. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fallbackCodeId - Fallback code id
   * @param {Object} opts.fallbackCode - Fallback code payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const fallbackCodeId = _ref5.fallbackCodeId;
    const fallbackCode = _ref5.fallbackCode;
    const headers = _ref5.headers;

    return client({
      url: `/fallback-code/${fallbackCodeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fallbackCode}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = fallbackCodesFactory;
