

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for salesforce-settings API (btrz-api-accounts). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function salesforceSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /salesforce-settings – get Salesforce settings for the current account. No query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ salesforceSettings: object }>>}
   */
  function get(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const token = _ref2.token;
    const query = _ref2.query;
    const headers = _ref2.headers;

    return client({
      url: "/salesforce-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /salesforce-settings – update Salesforce settings. When enabled is true, mcInstanceId,
   * messageId, clientId, clientSecret are required. Emits salesforcesettings.updated webhook.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.salesforceSettings - Settings payload (SalesforceSettingsPayload; enabled required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ salesforceSettings: object }>>}
   */
  function update(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const salesforceSettings = _ref3.salesforceSettings;
    const headers = _ref3.headers;

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
