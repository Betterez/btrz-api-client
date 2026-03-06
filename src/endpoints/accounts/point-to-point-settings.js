const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for point-to-point-settings API (btrz-api-accounts). Requires user logged in to backoffice app.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function pointToPointSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /point-to-point-settings – get point-to-point settings for the current account. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ pointToPointSettings: object }>>}
   */
  function get({token, jwtToken, headers}) {
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
  function update({token, jwtToken, pointToPointSettings, headers}) {
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
