"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for rms-settings (revenue management) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function revenueManagementSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /rms-settings — get revenue management settings for the account. No query parameters.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth token
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ data: { revenueManagementSettings: { enabled: boolean, applicationId?: string, subscriptionId?: string, ratalityClientId?: string, userId?: string } } }>>}
   * @throws {import("axios").AxiosError} 401 Unauthorized (missing or invalid API key/Authorization)
   * @throws {import("axios").AxiosError} 500 Internal server error
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/rms-settings",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /rms-settings — update revenue management settings. Body is the settings object (e.g. { enabled: true }).
   * When enabling, Ratality credentials must already exist on the account. Emits rms.enabled / rms.disabled webhooks.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth token
   * @param {{ enabled: boolean, ratalityUsername?: string, ratalityPassword?: string }} opts.revenueManagementSettings - Settings payload (at least enabled; credentials required when enabling)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ data: { revenueManagementSettings: { enabled: boolean, applicationId?: string, subscriptionId?: string, ratalityClientId?: string, userId?: string } } }>>}
   * @throws {import("axios").AxiosError} 400 ACCOUNT_ALREADY_HAS_RMS_SETTINGS_ENABLED, RATALITY_CREDENTIALS_REQUIRED, CREATE_CLIENT_*
   * @throws {import("axios").AxiosError} 401 Unauthorized
   * @throws {import("axios").AxiosError} 404 ACCOUNT_NOT_FOUND
   * @throws {import("axios").AxiosError} 500 CREATE_USER_ERROR or internal server error
   */
  function update(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        revenueManagementSettings = _ref3.revenueManagementSettings,
        headers = _ref3.headers;

    return client({
      url: "/rms-settings",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: revenueManagementSettings
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = revenueManagementSettingsFactory;