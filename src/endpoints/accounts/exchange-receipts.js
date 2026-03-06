/* eslint-disable import/extensions */
const {authorizationHeaders} = require("../endpoints_helpers");

/**
 * Factory for exchange-receipt-settings API (btrz-api-accounts).
 * Get or update account exchange receipt settings (CNBV-related fields). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ update: function, get: function }}
 */
function exchangeReceiptsFactory({client, internalAuthTokenProvider}) {
  /**
   * PUT /exchange-receipt-settings – Update exchange receipt settings. Requires BETTEREZ_APP JWT.
   * Body: { exchangeReceipt } or ExchangeReceipt fields at root. All fields must be strings.
   * Emits exchangeReceipt.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (BETTEREZ_APP audience)
   * @param {Object} opts.data - Body: { exchangeReceipt } or required ExchangeReceipt fields
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ exchangeReceipt: object }>>}
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
   * GET /exchange-receipt-settings – Get exchange receipt settings. Requires BETTEREZ_APP JWT.
   * Returns empty object if not set.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ exchangeReceipt: object }>>}
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
