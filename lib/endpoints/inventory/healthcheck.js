"use strict";

/**
 * Factory for healthcheck API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
function healthCheckFactory(_ref) {
  var client = _ref.client;

  /**
   * GET /healthcheck - health check.
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get() {
    return client({
      url: "/healthcheck",
      method: "get"
    });
  }

  return {
    get: get
  };
}

module.exports = healthCheckFactory;