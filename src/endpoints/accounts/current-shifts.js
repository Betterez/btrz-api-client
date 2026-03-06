const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} CurrentShiftsQuery
 * @property {string} [includeActivity] - Set to 'false' to avoid returning sales activity data for the shift (default 'true')
 */

/**
 * Factory for current-shift (per user) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function currentShiftsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /users/:userId/current-shift - get current shift for user.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.userId - User id (ObjectId)
   * @param {CurrentShiftsQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, userId, query = {}, headers}) {
    return client.get(`/users/${userId}/current-shift`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = currentShiftsFactory;
