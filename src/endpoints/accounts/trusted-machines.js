const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function trustedMachinesFactory({client, internalAuthTokenProvider}) {
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
  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/trusted-machines",
      method: "post",
      withCredentials: true,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
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
  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/trusted-machines/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      params: query,
      url: "/trusted-machines",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create,
    get,
    all
  };
}

module.exports = trustedMachinesFactory;
