const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for journey-prices-settings API (btrz-api-accounts). Journey pricing settings (record protection rules, pricing parameters).
 * Requires user logged in to backoffice app.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function journeyPricesSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /journey-prices-settings – Get journey prices settings for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ journeyPricesSettings: object }>>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/journey-prices-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /journey-prices-settings – Update journey prices settings. Body: JourneyPricesSettings at root.
   * Required: recordProtectionRules. Optional: pricingParameters, allowEachTripSegmentToBePricedIndividually.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.journeyPricesSettings - { recordProtectionRules, pricingParameters?, allowEachTripSegmentToBePricedIndividually? }
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ journeyPricesSettings: object }>>}
   */
  function update({token, jwtToken, journeyPricesSettings, headers}) {
    return client({
      url: "/journey-prices-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: journeyPricesSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = journeyPricesSettingsFactory;
