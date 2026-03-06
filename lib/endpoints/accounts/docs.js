"use strict";

/**
 * Factory for API docs (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
function docsFactory(_ref) {
  var client = _ref.client;

  /**
   * GET /api-docs-v2 - get API documentation.
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get() {
    return client.get("/api-docs-v2", {});
  }

  return {
    get: get
  };
}

module.exports = docsFactory;