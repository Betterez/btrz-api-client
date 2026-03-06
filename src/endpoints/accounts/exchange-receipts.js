/* eslint-disable import/extensions */
const {authorizationHeaders} = require("../endpoints_helpers");

/**
 * Factory for exchange-receipt-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ update: function, get: function }}
 */
function exchangeReceiptsFactory({client, internalAuthTokenProvider}) {
  /**
   * PUT /exchange-receipt-settings - update exchange receipt settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Settings payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({data, token, jwtToken, headers}) {
    return client({
      url: "/exchange-receipt-settings",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * GET /exchange-receipt-settings - get exchange receipt settings. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, headers}) {
    return client({
      url: "/exchange-receipt-settings",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    update,
    get
  };
}

module.exports = exchangeReceiptsFactory;
