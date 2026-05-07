"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /trusted-machines (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} TrustedMachinesListQuery
 * @property {string} [userId] - Filter by user id (ObjectId)
 * @property {number} [page] - Page to return
 * @property {number} [recordsPerPage] - Records per page (max 100)
 */

/**
 * Factory for trusted-machines API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function, get: function, all: function }}
 */


function trustedMachinesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /trusted-machines - trust the machine (hideInDocumentation: true in API). Sets cookie via Set-Cookie.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Body (NewTrustedMachine: expirationDays, browserFingerprint, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ result: string, trustedMachine: Object }>>}
   *   Errors: 400, 401, 409, 500
   */
  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        data = _ref2.data,
        headers = _ref2.headers;

    return client({
      url: "/trusted-machines",
      method: "post",
      withCredentials: true,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  /**
   * GET /trusted-machines/:id - get a trusted machine by id. See get-by-id-handler getSpec() in btrz-api-accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Trusted machine id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ trustedmachine: Object }>>}
   *   Errors: 400, 401, 404 (TRUSTED_MACHINE_NOT_FOUND), 500
   */
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        headers = _ref3.headers;

    return client({
      url: "/trusted-machines/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /trusted-machines - list enabled trusted machines for the account. See get-handler getSpec().
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TrustedMachinesListQuery} [opts.query] - Query params (userId, page, recordsPerPage max 100)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ trustedmachines: Array }>>}
   *   Paginated. Errors: 401, 500
   */
  function all(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      params: query,
      url: "/trusted-machines",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    create: create,
    get: get,
    all: all
  };
}

module.exports = trustedMachinesFactory;