"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for system-model-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function, validate: function }}
 */


function systemModelSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        modelName = _ref2.modelName,
        headers = _ref2.headers;

    return client({
      url: "/system-models/" + modelName + "/settings",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        modelName = _ref3.modelName,
        systemModelSettings = _ref3.systemModelSettings,
        headers = _ref3.headers;

    return client({
      url: "/system-models/" + modelName + "/settings",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        systemModelSettings: systemModelSettings
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
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        modelName = _ref4.modelName,
        action = _ref4.action,
        payload = _ref4.payload,
        headers = _ref4.headers;

    return client({
      url: "/system-models/" + modelName + "/validations",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        action: action,
        payload: payload
      }
    });
  }

  return {
    get: get,
    update: update,
    validate: validate
  };
}

module.exports = systemModelSettingsFactory;