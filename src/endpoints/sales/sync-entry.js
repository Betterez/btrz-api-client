/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for sync-entry API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ patch: function }}
 */
function syncEntryFactory({client, internalAuthTokenProvider}) {
  /**
   * PATCH /sync-entry - patch sync entry.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.data - Request body
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function patch({token, data, jwtToken, headers}) {
    return client({
      url: "/sync-entry",
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    patch
  };
}

module.exports = syncEntryFactory;
