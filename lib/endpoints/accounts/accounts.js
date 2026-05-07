"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for accounts API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, defaultUsers: { create: function } }}
 */


function accountsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /accounts/:accountId - get an account by id.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.accountId - Account id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var jwtToken = _ref2.jwtToken,
        accountId = _ref2.accountId,
        headers = _ref2.headers;

    return client({
      url: "/accounts/" + accountId,
      headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  var defaultUsers = {
    /**
     * POST /accounts/:accountId/default-users - create default users for account.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.accountId - Account id (ObjectId)
     * @param {Object} opts.data - Default users payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          accountId = _ref3.accountId,
          data = _ref3.data,
          headers = _ref3.headers;

      return client({
        url: "/accounts/" + accountId + "/default-users",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    get: get,
    defaultUsers: defaultUsers
  };
}

module.exports = accountsFactory;