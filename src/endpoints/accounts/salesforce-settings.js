const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for salesforce-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function salesforceSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /salesforce-settings - get Salesforce settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({jwtToken, token, query, headers}) {
    return client({
      url: "/salesforce-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /salesforce-settings - update Salesforce settings.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.salesforceSettings - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, salesforceSettings, headers}) {
    return client({
      url: "/salesforce-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        salesforceSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = salesforceSettingsFactory;
