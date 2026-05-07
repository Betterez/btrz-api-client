"use strict";

/* eslint-disable import/extensions */
var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for exchange-receipt-settings API (btrz-api-accounts).
 * Get or update account exchange receipt settings (CNBV-related fields). Requires BETTEREZ_APP audience.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ update: function, get: function }}
 */


function exchangeReceiptsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function update(_ref2) {
    var data = _ref2.data,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/exchange-receipt-settings",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
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
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client({
      url: "/exchange-receipt-settings",
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    update: update,
    get: get
  };
}

module.exports = exchangeReceiptsFactory;