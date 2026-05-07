"use strict";

/**
 * Factory for API docs (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} docs API methods
 */
function docsFactory(_ref) {
  var client = _ref.client,
      _internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /api-docs-v2 - get API docs.
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