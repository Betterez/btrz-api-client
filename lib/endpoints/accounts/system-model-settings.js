"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for system-model-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
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

  return {
    get: get,
    update: update
  };
}

module.exports = systemModelSettingsFactory;