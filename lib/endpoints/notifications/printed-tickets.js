"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /printed-tickets (btrz-api-notifications). See get-printed-tickets getSpec().
 * @typedef {Object} PrintedTicketsGetQuery
 * @property {string} trxId - Transaction id to print its tickets (required)
 * @property {string} [channel] - Optional channel of the transaction
 * @property {string} [lang] - Language (handler uses for PDF URL)
 * @property {string} [date] - Date (handler uses for PDF URL)
 */

/**
 * Factory for printed-tickets API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function printedTicketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /printed-tickets - get printed tickets PDF (trxId required; lang, date optional).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.responseType] - Response type ("json" or "blob")
   * @param {string} opts.trxId - Transaction id (required)
   * @param {string} [opts.lang] - Language code
   * @param {string} [opts.date] - Date
   * @param {string} [opts.channel] - Optional channel of the transaction
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$responseType = _ref2.responseType,
        responseType = _ref2$responseType === undefined ? "json" : _ref2$responseType,
        trxId = _ref2.trxId,
        lang = _ref2.lang,
        date = _ref2.date,
        channel = _ref2.channel,
        headers = _ref2.headers;

    return client({
      url: "/printed-tickets",
      params: { trxId: trxId, lang: lang, date: date, channel: channel },
      responseType: responseType,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = printedTicketsFactory;