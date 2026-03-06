const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for operation-settings API (btrz-api-accounts). Operation settings (manifest, schedule, preferences.operations).
 * Requires BETTEREZ_APP audience. PUT emits webhook operationsettings.updated.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function operationSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /operation-settings – Get operation settings for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query params (passed to request)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationSettings: object }>>}
   */
  function get({token, jwtToken, query, headers}) {
    return client({
      url: "/operation-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /operation-settings – Update operation settings. Body: { operationSettings } (OperationSettingsPutData). Emits operationsettings.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.operationSettings - Operation settings payload (partial or full OperationSettingsPutData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationSettings: object }>>}
   */
  function update({jwtToken, token, operationSettings, headers}) {
    return client({
      url: "/operation-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        operationSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = operationSettingsFactory;
