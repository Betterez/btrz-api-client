const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for rms-settings (revenue management) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function revenueManagementSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /rms-settings - get revenue management settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/rms-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /rms-settings - update revenue management settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.revenueManagementSettings - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, revenueManagementSettings, headers}) {
    return client({
      url: "/rms-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: revenueManagementSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = revenueManagementSettingsFactory;
