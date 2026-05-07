

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for point-to-point-settings API (btrz-api-accounts). Requires user logged in to backoffice app.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function pointToPointSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /point-to-point-settings – get point-to-point settings for the current account. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ pointToPointSettings: object }>>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

    return client({
      url: "/point-to-point-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /point-to-point-settings – update settings. Body: useOnlySpecificFareTable (boolean) required.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {{ useOnlySpecificFareTable: boolean }} opts.pointToPointSettings - Settings payload (useOnlySpecificFareTable required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ pointToPointSettings: object }>>}
   */
  function update(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const pointToPointSettings = _ref3.pointToPointSettings;
    const headers = _ref3.headers;

    return client({
      url: "/point-to-point-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: pointToPointSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = pointToPointSettingsFactory;
