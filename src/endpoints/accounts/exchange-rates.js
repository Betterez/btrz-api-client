/* eslint-disable max-len */
/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

/**
 * Factory for exchange-rates API (btrz-api-accounts).
 * Manage account exchange rates by currency ISO code. GET returns paginated list; POST creates a rate and updates account preferences.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ allByIsoCode: function, create: function }}
 */
function exchangeRatesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /exchange-rates/:isoCode – List exchange rates for the account filtered by currency ISO code (3 letters).
   * Response is paginated (exchangeRates array + totalRecords, page, etc.).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.isoCode - Currency ISO code (3 uppercase letters, e.g. USD, MXN)
   * @param {Object} [opts.query] - Optional query (e.g. page for pagination)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ exchangeRates: object[], totalRecords: number, ... }>>}
   */
  function allByIsoCode({token, jwtToken, isoCode, query = {}, headers}) {
    return client({
      params: query,
      url: `/exchange-rates/${isoCode}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /exchange-rates – Create an exchange rate. Requires BETTEREZ_APP JWT. Currency must be in account preferences and enabled.
   * Updates account preferences.supportedCurrencies for that currency. Emits exchangeRates.created.
   * Body: { exchangeRate } or { isoCode, buy, sell }. buy and sell must be > 0.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT (required for BETTEREZ_APP audience)
   * @param {Object} opts.data - Body: { isoCode, buy, sell } or { exchangeRate: { isoCode, buy, sell } }
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ exchangeRate: object }>>}
   */
  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/exchange-rates",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    allByIsoCode,
    create
  };
}

module.exports = exchangeRatesFactory;
