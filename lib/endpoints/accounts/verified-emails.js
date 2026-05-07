"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/verified-emails",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        email = _ref3.email,
        headers = _ref3.headers;

    return client({
      url: "/verified-emails/" + encodeURIComponent(email),
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/verified-emails",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
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
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        email = _ref5.email,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/verified-emails/" + encodeURIComponent(email),
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = verifiedEmailsFactory;