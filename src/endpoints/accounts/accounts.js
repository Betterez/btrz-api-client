const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for accounts API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, defaultUsers: { create: function }, configurationReplication: { create: function }, sessionRecordingSettings: { update: function } }}
 */
function accountsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /accounts/:accountId - get an account by id.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.accountId - Account id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({jwtToken, accountId, headers}) {
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
    create({token, jwtToken, accountId, data, headers}) {
      return client({
        url: `/accounts/${accountId}/default-users`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  /**
   * Query params for POST /accounts/:accountId/configuration-replication (btrz-api-accounts).
   * @typedef {Object} ConfigurationReplicationCreateQuery
   * @property {string} superUserId - Super user id (ObjectId)
   * @property {string} superUserHash - Super user hash
   */

  const configurationReplication = {
    /**
     * POST /accounts/:accountId/configuration-replication — enqueue a configuration pack export.
     * No request body. Requires SuperUser query credentials.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.accountId - Source Account _id to export (ObjectId)
     * @param {ConfigurationReplicationCreateQuery} [opts.query] - superUserId, superUserHash
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>} 202 { accepted, accountId, requestId }
     */
    create({token, jwtToken, accountId, query, headers}) {
      return client({
        url: `/accounts/${accountId}/configuration-replication`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    }
  };

  /**
   * Query params for PUT /accounts/:accountId/session-recording-settings (btrz-api-accounts).
   * @typedef {Object} SessionRecordingSettingsUpdateQuery
   * @property {string} superUserId - Super user id (ObjectId)
   * @property {string} superUserHash - Super user hash
   */

  const sessionRecordingSettings = {
    /**
     * PUT /accounts/:accountId/session-recording-settings — replace logRocket and rrweb preferences.
     * Requires SuperUser query credentials.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.accountId - Account _id (ObjectId)
     * @param {SessionRecordingSettingsUpdateQuery} [opts.query] - superUserId, superUserHash
     * @param {Object} opts.data - { logRocket, rrweb }
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>} 200 { logRocket, rrweb }
     */
    update({token, jwtToken, accountId, query, data, headers}) {
      return client({
        url: `/accounts/${accountId}/session-recording-settings`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    }
  };

  return {
    get,
    defaultUsers,
    configurationReplication,
    sessionRecordingSettings
  };
}

module.exports = accountsFactory;
