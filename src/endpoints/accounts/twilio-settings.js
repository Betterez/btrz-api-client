const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for twilio-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function twilioSettingsFactory({client, internalAuthTokenProvider}) {
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
  function get({jwtToken, token, query, headers}) {
    return client({
      url: "/twilio-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function update({jwtToken, token, twilioSettings, headers}) {
    return client({
      url: "/twilio-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        twilioSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = twilioSettingsFactory;
