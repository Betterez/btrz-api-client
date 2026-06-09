"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for control-classes-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, put: function }}
 */


function controlClassesSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /control-classes-settings — get control classes settings for the account. No query parameters.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth token
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ controlClassesSettings: { namingPolicy: string, childSelectionCriteriaDefault: string } }>>}
   * @throws {import("axios").AxiosError} 401 Unauthorized (missing or invalid API key/Authorization)
   * @throws {import("axios").AxiosError} 500 Internal server error
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/control-classes-settings",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /control-classes-settings — update control classes settings. At least one of namingPolicy or childSelectionCriteriaDefault must be provided.
   * @param {Object} opts
   * @param {string} [opts.token] - API key (X-API-KEY)
   * @param {string} [opts.jwtToken] - JWT or internal auth token
   * @param {{ namingPolicy?: string, childSelectionCriteriaDefault?: string }} opts.controlClassesSettings - Settings payload
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse<{ controlClassesSettings: { namingPolicy: string, childSelectionCriteriaDefault: string } }>>}
   * @throws {import("axios").AxiosError} 400 WRONG_DATA, ALLOW_DUPLICATES_NOT_ALLOWED_WITH_SALES_AUTHORIZATIONS_AVAILABILITY
   * @throws {import("axios").AxiosError} 401 Unauthorized
   * @throws {import("axios").AxiosError} 404 ACCOUNT_NOT_FOUND
   * @throws {import("axios").AxiosError} 500 Internal server error
   */
  function put(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        controlClassesSettings = _ref3.controlClassesSettings,
        headers = _ref3.headers;

    return client({
      url: "/control-classes-settings",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: controlClassesSettings
    });
  }

  return {
    get: get,
    put: put
  };
}

module.exports = controlClassesSettingsFactory;