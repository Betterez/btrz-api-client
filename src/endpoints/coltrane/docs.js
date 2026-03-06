/**
 * Factory for Coltrane API docs (btrz-api-coltrane).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
function docsFactory({client}) {
  /**
   * GET /api-docs-v2 - get API documentation.
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
