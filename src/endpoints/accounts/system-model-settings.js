const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for system-model-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function systemModelSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /system-models/:modelName/settings – required-field settings for a system model.
   * @param {Object} opts
   * @param {string} opts.modelName - System model
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ systemModelSettings: object }>>}
   */
  function get({token, jwtToken, modelName, headers}) {
    return client({
      url: `/system-models/${modelName}/settings`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /system-models/:modelName/settings – create or update required-field settings.
   * @param {Object} opts
   * @param {string} opts.modelName - System model
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.systemModelSettings - Payload (requiredFields, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ systemModelSettings: object }>>}
   */
  function update({jwtToken, token, modelName, systemModelSettings, headers}) {
    return client({
      url: `/system-models/${modelName}/settings`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        systemModelSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = systemModelSettingsFactory;
