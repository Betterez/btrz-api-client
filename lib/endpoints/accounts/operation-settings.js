

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for operation-settings API (btrz-api-accounts). Operation settings (manifest, schedule, preferences.operations).
 * Requires BETTEREZ_APP audience. PUT emits webhook operationsettings.updated.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function operationSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /operation-settings – Get operation settings for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query params (passed to request)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ operationSettings: object }>>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const query = _ref2.query;
    const headers = _ref2.headers;

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
  function update(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const operationSettings = _ref3.operationSettings;
    const headers = _ref3.headers;

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
