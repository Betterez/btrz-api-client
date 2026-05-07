"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for twilio-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function twilioSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /twilio-settings - get Twilio settings for the account. See get-handler getSpec() in btrz-api-accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ twilioSettings: Object }>>}
   *   Errors: 401, 404 (TWILIO_SETTINGS_NOT_FOUND), 500
   */
  function get(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/twilio-settings",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /twilio-settings - update Twilio settings. See put-handler getSpec() in btrz-api-accounts.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.twilioSettings - Settings payload (TwilioSettingsPayload: enabled, sendingNumber, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ twilioSettings: Object }>>}
   *   Errors: 401, 404, 409, 500
   */
  function update(_ref3) {
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        twilioSettings = _ref3.twilioSettings,
        headers = _ref3.headers;

    return client({
      url: "/twilio-settings",
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        twilioSettings: twilioSettings
      }
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = twilioSettingsFactory;