const {authorizationHeaders} = require("../endpoints_helpers.js");

/**
 * Query params for GET /pay-on-accounts (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} PayOnAccountsListQuery
 * @property {number} [page] - Page number
 * @property {string} [format] - Format to retrieve the data
 * @property {string} [disabled] - Filter by disabled [true, false]
 * @property {string} [term] - Search term to filter PayOnAccounts
 * @property {string} [fareIds] - Fare ids to filter
 * @property {string} [providerId] - Provider id to filter
 */

/**
 * Factory for pay-on-accounts API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function payOnAccountsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /pay-on-accounts - list pay-on accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PayOnAccountsListQuery} [opts.query] - Query params
   * @param {string} [opts.responseType] - Response type (e.g. json)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, responseType = "json", headers}) {
    return client.get("/pay-on-accounts", {
      params: query,
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = payOnAccountsFactory;
