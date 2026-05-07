

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /verified-emails (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} VerifiedEmailsListQuery
 * @property {number} [page] - Page number (1-based). Default 1.
 * @property {number} [pageSize] - Page size. Default 20.
 */

/**
 * Factory for verified-emails API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */


function verifiedEmailsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /verified-emails - list verified emails for the account (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {VerifiedEmailsListQuery} [opts.query] - Query params (page, pageSize)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ verifiedEmails: Array }>>}
   *   Errors: 401, 500
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/verified-emails",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /verified-emails/:email - get a verified email by email address.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.email - Email address (path parameter)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ verifiedEmail: Object }>>}
   *   Errors: 400 (WRONG_DATA), 401, 404 (VERIFIED_EMAIL_NOT_FOUND), 500
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const email = _ref3.email;
    const headers = _ref3.headers;

    return client({
      url: `/verified-emails/${encodeURIComponent(email)}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /verified-emails - create a verified email. Emits webhook verifiedEmails.created.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Body: email (required), status (BLACKLISTED | BLOCKED | WHITELISTED), optional QEVResponse
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ verifiedEmail: Object }>>}
   *   Errors: 400 (WRONG_DATA, INVALID_STATUS), 401, 500
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const data = _ref4.data;
    const headers = _ref4.headers;

    return client({
      url: "/verified-emails",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * PUT /verified-emails/:email - update a verified email. Emits webhook verifiedEmails.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.email - Email address (path parameter)
   * @param {Object} opts.data - Body: status (BLACKLISTED | BLOCKED | WHITELISTED), optional QEVResponse
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ verifiedEmail: Object }>>}
   *   Errors: 400 (INVALID_STATUS, VERIFIED_EMAIL_BLOCKED), 401, 404 (VERIFIED_EMAIL_NOT_FOUND), 500
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const email = _ref5.email;
    const data = _ref5.data;
    const headers = _ref5.headers;

    return client({
      url: `/verified-emails/${encodeURIComponent(email)}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = verifiedEmailsFactory;
