

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for domains API (btrz-api-accounts).
 * Endpoints manage subdomains for the account: list, create (with DNS and websales config), and delete.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, remove: function }}
 */


function domainsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /domains – List all domain names for the current account.
   * Response body is an array of strings (primary domain first, then secondary domains). No query parameters.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<string[]>>} response.data is string[]
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      params: query,
      url: "/domains",
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /domains – Create a new subdomain for the account.
   * Adds DNS CNAME and default websales config. Requires BETTEREZ_APP JWT. Emits domains.created (and websalesConfig.created) webhooks.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (required for BETTEREZ_APP audience)
   * @param {Object} opts.data - Body: { domain } or { domainInfo: { domain } }. domain must match pattern (no dots, no underscores).
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ domain: string }>>} response.data is AddedDomainResponse
   */
  function create(_ref3) {
    const data = _ref3.data;
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const headers = _ref3.headers;

    return client({
      url: "/domains",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /domains/:domain – Remove a subdomain from the account.
   * Removes DNS entry, websales config, and domain from payment methods and inventory products.
   * Primary domain cannot be deleted. Emits domains.deleted and websalesConfig.deleted.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (required for BETTEREZ_APP audience)
   * @param {string} opts.domain - Domain name (path parameter)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ domain: string }>>} response.data is DeletedDomainResponse
   */
  function remove(_ref4) {
    const domain = _ref4.domain;
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const headers = _ref4.headers;

    return client({
      url: `/domains/${domain}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    create,
    remove
  };
}

module.exports = domainsFactory;
