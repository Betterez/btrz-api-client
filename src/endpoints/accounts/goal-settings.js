const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for goal-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function goalSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /goal-settings - get goal settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, query, headers}) {
    return client({
      url: "/goal-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /goal-settings - update goal settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.goalSettings - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
