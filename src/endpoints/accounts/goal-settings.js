const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for goal-settings API (btrz-api-accounts). Goal API integration settings.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function goalSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /goal-settings – Get goal settings for the account. Requires BETTEREZ_APP JWT.
   * If user lacks read permission for /admin/integrations/goal, returns 200 with empty goalSettings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ goalSettings: object }>>}
   */
  function get({token, jwtToken, query, headers}) {
    return client({
      url: "/goal-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /goal-settings – Update goal settings. Requires BETTEREZ_APP and update permission for
   * /admin/integrations/goal. Emits goalsettings.updated. Body: { goalSettings }.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.goalSettings - Required: baseUrl, clientId, clientSecret, pushOnManifestStatus
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ goalSettings: object }>>}
   */
  function update({jwtToken, token, goalSettings, headers}) {
    return client({
      url: "/goal-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        goalSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = goalSettingsFactory;
