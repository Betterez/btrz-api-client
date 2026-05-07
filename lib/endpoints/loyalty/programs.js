"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /programs (loyalty). Client merges context into query.
 * @typedef {Object} LoyaltyProgramsListQuery
 * @property {string} [context] - Context (merged from opts.context by client)
 * @property {string} [providerId] - Provider id (if supported by backend)
 */

/**
 * Factory for loyalty programs API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, put: function }}
 */


function programsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /programs - list loyalty programs. Query is merged with context (context takes precedence in merge).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.context] - Context; merged into query as query.context
   * @param {LoyaltyProgramsListQuery} [opts.query] - Additional query params (merged with context)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        context = _ref2.context,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "/programs",
      params: queryObj,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /programs - create loyalty program.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.program - Program payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        program = _ref3.program,
        headers = _ref3.headers;

    return client({
      url: "/programs",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: program
    });
  }

  /**
   * PUT /programs/:programId - update loyalty program.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.programId - Program id
   * @param {Object} opts.program - Program payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function put(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        programId = _ref4.programId,
        program = _ref4.program,
        headers = _ref4.headers;

    return client({
      url: "/programs/" + programId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: program
    });
  }

  return {
    all: all,
    create: create,
    put: put
  };
}

module.exports = programsFactory;