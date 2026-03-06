const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /companies (btrz-api-inventory). See get-companies getSpec().
 * @typedef {Object} InventoryCompaniesQuery
 * @property {string} [search] - Term to find companies (required by API for getBySearch)
 * @property {string} [disabled] - Filter by disabled [true, false]
 * @property {string} [providerId] - Get items from the provider
 */

/**
 * Factory for companies API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function companiesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /companies - list companies.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryCompaniesQuery} [opts.query] - Query params (search, disabled, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/companies",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = companiesFactory;
