const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

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
  function get({
    token, jwtToken, responseType = "json", trxId, lang, date, headers
  }) {
    return client({
      url: "/printed-tickets",
      params: {trxId, lang, date},
      responseType,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = printedTicketsFactory;
