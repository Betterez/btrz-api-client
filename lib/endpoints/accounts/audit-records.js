const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for audit-records API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function auditRecordsFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /audit-records/:providerId/:folder/:itemId – get audit events for one object.
   * Requires BETTEREZ_APP JWT. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.providerId - Account (provider) ID
   * @param {string} opts.folder - Audit folder / entity name
   * @param {string} opts.itemId - Audited object ID
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{
   *   accountId: string,
   *   folder: string,
   *   objectId: string,
   *   events: Array<{
   *     ts: string,
   *     userId: string,
   *     operation: string,
   *     changes: Array<{path: string, from: *, to: *}>
   *   }>
   * }>>}
   */
  function get({
    token,
    jwtToken,
    providerId,
    folder,
    itemId,
    headers
  }) {
    return client({
      url: `/audit-records/${providerId}/${folder}/${itemId}`,
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }
  return {
    get
  };
}
module.exports = auditRecordsFactory;