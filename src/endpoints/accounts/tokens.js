const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /tokens (btrz-api-accounts). See get-tokens handler getSpec().
 * @typedef {Object} TokensGetQuery
 * @property {string} token - Token ID (required)
 * @property {string} type - Token type (required; see API Token.getTypes())
 */

/**
 * Factory for tokens (applications) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, create: function }}
 */
function applicationsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /tokens - get a token by ID and type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TokensGetQuery} [opts.query] - Query params: token (id), type (required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, headers, query}) {
    return client.get("/tokens", {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * POST /tokens - create a token (application). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Token payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/tokens",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    get,
    create
  };
}

module.exports = applicationsFactory;
