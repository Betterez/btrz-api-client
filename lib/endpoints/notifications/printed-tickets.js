"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
   * GET /printed-tickets - get printed tickets (by trxId, lang, date); responseType json or blob.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.responseType] - Response type (e.g. "json" or "blob")
   * @param {string} opts.trxId - Transaction id
   * @param {string} opts.lang - Language code
   * @param {string} opts.date - Date
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
        headers = _ref2.headers;

    return client({
      url: "/printed-tickets",
      params: { trxId: trxId, lang: lang, date: date },
      responseType: responseType,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = printedTicketsFactory;