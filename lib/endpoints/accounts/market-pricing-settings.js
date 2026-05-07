

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for market-pricing-settings API (btrz-api-accounts). Market pricing configuration (e.g. useOnlySpecificFareTable).
 * Requires user logged in to backoffice app.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function marketPricingSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /market-pricing-settings – Get market pricing settings for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ marketPricingSettings: { useOnlySpecificFareTable: boolean } }>>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

    return client({
      url: "/market-pricing-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /market-pricing-settings – Update market pricing settings. Body: MarketPricingSettings at root (useOnlySpecificFareTable required).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.marketPricingSettings - { useOnlySpecificFareTable: boolean }
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ marketPricingSettings: object }>>}
   */
  function update(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const marketPricingSettings = _ref3.marketPricingSettings;
    const headers = _ref3.headers;

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
