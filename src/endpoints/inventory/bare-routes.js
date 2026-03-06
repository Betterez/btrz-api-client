const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /bare-routes (btrz-api-inventory). See get-bare-routes getSpec().
 * @typedef {Object} BareRoutesListQuery
 * @property {string} [providerIds] - Comma-separated provider IDs
 * @property {string} [productIds] - Comma-separated product IDs
 */

/**
 * Query params for GET /bare-routes/:routeId (btrz-api-inventory). See get-bare-routes-id getSpec().
 * @typedef {Object} BareRoutesGetQuery
 * @property {string} [providerIds] - Comma-separated provider IDs
 */

/**
 * Factory for bare-routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */
function bareRoutesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /bare-routes - list bare routes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {BareRoutesListQuery} [opts.query] - Query params (providerIds, productIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/bare-routes",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /bare-routes/:routeId - get bare route by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.routeId - Route id
   * @param {BareRoutesGetQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({routeId, token, query = {}, headers}) {
    return client({
      url: `/bare-routes/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = bareRoutesFactory;
