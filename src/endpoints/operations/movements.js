const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} MovementsQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for movements API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} movements API methods
 */
function movementsFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /movements - create movement.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.movement - Movement payload
   * @param {MovementsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, movement, query = {}, headers}) {
    return client({
      url: "/movements",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: movement
    });
  }

  return {
    create
  };
}

module.exports = movementsFactory;
