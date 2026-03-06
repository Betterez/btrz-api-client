const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for shift-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function shiftSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /shift-settings – get shift settings for the current account. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ shiftSettings: object }>>}
   */
  function get({token, jwtToken, query, headers}) {
    return client({
      url: "/shift-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /shift-settings – update shift settings. Emits shiftsettings.updated webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.shiftSettings - Settings payload (ShiftSetting)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ shiftSettings: object }>>}
   */
  function update({jwtToken, token, shiftSettings, headers}) {
    return client({
      url: "/shift-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        shiftSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = shiftSettingsFactory;
