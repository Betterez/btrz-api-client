const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for domains API (btrz-api-accounts).
 * Endpoints manage subdomains for the account: list, create (with DNS and websales config), and delete.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, remove: function }}
 */
function domainsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /domains – List all domain names for the current account.
   * Response body is an array of strings (primary domain first, then secondary domains). No query parameters.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<string[]>>} response.data is string[]
   */
  function all({token, query = {}, headers}) {
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
  function create({data, token, jwtToken, headers}) {
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
  function remove({domain, token, jwtToken, headers}) {
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
