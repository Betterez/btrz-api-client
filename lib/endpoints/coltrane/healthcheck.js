"use strict";

/**
 * Factory for Coltrane healthcheck API (btrz-api-coltrane) — liveness probe.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @returns {{ get: function }}
 */
function healthcheckFactory(_ref) {
  var client = _ref.client;

  /**
   * GET /healthcheck — liveness probe. Returns 200 with empty body when the service is running. No authentication required.
   * @param {Object} [opts]
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ data: {} }>>}
   * @throws {import("axios").AxiosError} 500 Service unhealthy or shutting down
   */
  function get() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        headers = _ref2.headers;

    return client({
      url: "/healthcheck",
      method: "get",
      headers: headers || {}
    });
  }

  return {
    get: get
  };
}

module.exports = healthcheckFactory;