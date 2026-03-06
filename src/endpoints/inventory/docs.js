/**
 * Factory for API docs (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
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
