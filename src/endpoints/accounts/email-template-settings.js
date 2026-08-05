const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for email-template-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function emailTemplateSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /email-template-settings – email template flow preference for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplateSettings: { useEmailTemplates: boolean } }>>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/email-template-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /email-template-settings – update email template flow preference.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.emailTemplateSettings - Payload with useEmailTemplates
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ emailTemplateSettings: { useEmailTemplates: boolean } }>>}
   */
  function update({token, jwtToken, emailTemplateSettings, headers}) {
    return client({
      url: "/email-template-settings",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        emailTemplateSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = emailTemplateSettingsFactory;
