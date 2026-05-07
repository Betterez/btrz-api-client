

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for accounts API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, defaultUsers: { create: function } }}
 */


function accountsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /accounts/:accountId - get an account by id.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.accountId - Account id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const accountId = _ref2.accountId;
    const headers = _ref2.headers;

    return client({
      url: `/accounts/${accountId}`,
      headers: authorizationHeaders({jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const defaultUsers = {
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
      const token = _ref3.token;
      const jwtToken = _ref3.jwtToken;
      const accountId = _ref3.accountId;
      const data = _ref3.data;
      const headers = _ref3.headers;

      return client({
        url: `/accounts/${accountId}/default-users`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    get,
    defaultUsers
  };
}

module.exports = accountsFactory;
