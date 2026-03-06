const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for print-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, update: function }}
 */
function printSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /print-settings – get print settings for the current account. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printSettings: object }>>}
   */
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/print-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /print-settings – update print settings. Emits printsettings.updated webhook. Requires BETTEREZ_APP.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.printSettings - Print settings payload (PrintSettingsPutData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ printSettings: object }>>}
   */
  function update({jwtToken, token, printSettings, headers}) {
    return client({
      url: "/print-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        printSettings
      }
    });
  }

  return {
    all,
    update
  };
}

module.exports = printSettingsFactory;
