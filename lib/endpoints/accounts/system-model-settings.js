

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for system-model-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function, validate: function }}
 */


function systemModelSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /system-models/:modelName/settings – required-field settings for a system model.
   * @param {Object} opts
   * @param {string} opts.modelName - System model
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ systemModelSettings: object }>>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const modelName = _ref2.modelName;
    const headers = _ref2.headers;

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
  function update(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const modelName = _ref3.modelName;
    const systemModelSettings = _ref3.systemModelSettings;
    const headers = _ref3.headers;

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
  function validate(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const modelName = _ref4.modelName;
    const action = _ref4.action;
    const payload = _ref4.payload;
    const headers = _ref4.headers;

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
