

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for shift-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function shiftSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /shift-settings – get shift settings for the current account. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ shiftSettings: object }>>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const query = _ref2.query;
    const headers = _ref2.headers;

    return client({
      url: "/shift-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /shift-settings – update shift settings. Emits shiftsettings.updated webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.shiftSettings - Settings payload (ShiftSetting)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ shiftSettings: object }>>}
   */
  function update(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const shiftSettings = _ref3.shiftSettings;
    const headers = _ref3.headers;

    return client({
      url: "/shift-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        shiftSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = shiftSettingsFactory;
