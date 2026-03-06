const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for journey-prices-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function journeyPricesSettingsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /journey-prices-settings - get journey prices settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/journey-prices-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /journey-prices-settings - update journey prices settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.journeyPricesSettings - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
