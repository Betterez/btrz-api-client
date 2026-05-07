

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$responseType = _ref2.responseType;
    const responseType = _ref2$responseType === undefined ? "json" : _ref2$responseType;
    const trxId = _ref2.trxId;
    const lang = _ref2.lang;
    const date = _ref2.date;
    const channel = _ref2.channel;
    const headers = _ref2.headers;

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
