/**
 * Factory for healthcheck API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
function healthCheckFactory({client}) {
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
    get
  };
}

module.exports = healthCheckFactory;
