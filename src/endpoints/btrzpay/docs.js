/**
 * Factory for API docs (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function docsFactory({client}) {
  /**
   * GET /api-docs-v2 - get API docs.
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get() {
    return client.get("/api-docs-v2", {});
  }

  return {
    get
  };
}

module.exports = docsFactory;
