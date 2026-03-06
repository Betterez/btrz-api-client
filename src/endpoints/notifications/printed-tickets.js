const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

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
function printedTicketsFactory({
  client, internalAuthTokenProvider
}) {
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
  function get({
    token, jwtToken, responseType = "json", trxId, lang, date, channel, headers
  }) {
    return client({
      url: "/printed-tickets",
      params: {trxId, lang, date, channel},
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = printedTicketsFactory;
