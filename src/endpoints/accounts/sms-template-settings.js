const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for sms-template-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function smsTemplateSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /sms-template-settings – SMS template flow preference for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplateSettings: { useSmsTemplates: boolean } }>>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/sms-template-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /sms-template-settings – update SMS template flow preference.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.smsTemplateSettings - Payload with useSmsTemplates
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ smsTemplateSettings: { useSmsTemplates: boolean } }>>}
   */
  function update({token, jwtToken, smsTemplateSettings, headers}) {
    return client({
      url: "/sms-template-settings",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        smsTemplateSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = smsTemplateSettingsFactory;
