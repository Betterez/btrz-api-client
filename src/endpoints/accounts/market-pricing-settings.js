const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for market-pricing-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function marketPricingSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /market-pricing-settings - get market pricing settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/market-pricing-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /market-pricing-settings - update market pricing settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.marketPricingSettings - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, marketPricingSettings, headers}) {
    return client({
      url: "/market-pricing-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: marketPricingSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = marketPricingSettingsFactory;
