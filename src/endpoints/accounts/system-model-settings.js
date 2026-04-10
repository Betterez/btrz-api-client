const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for system-model-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function, validate: function }}
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

  /**
   * POST /system-models/:modelName/validations – validate a payload against stored required-field rules.
   * @param {Object} opts
   * @param {string} opts.modelName - System model
   * @param {string} opts.action - Operation context; rules that include this action are enforced against payload.
   * @param {Object} opts.payload - Payload to validate (e.g. the body you would send to create or update the model).
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ valid: boolean, code?: string, message?: string }>>}
   */
  function validate({jwtToken, token, modelName, action, payload, headers}) {
    return client({
      url: `/system-models/${modelName}/validations`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        action,
        payload
      }
    });
  }

  return {
    get,
    update,
    validate
  };
}

module.exports = systemModelSettingsFactory;
