/* eslint-disable max-len */
/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

/**
 * Factory for exchange-rates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ allByIsoCode: function, create: function }}
 */
function exchangeRatesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /exchange-rates/:isoCode - get exchange rates by ISO code. API does not define query params in getSpec().
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.isoCode - Currency ISO code (3 characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function allByIsoCode({token, jwtToken, isoCode, query = {}, headers}) {
    return client({
      params: query,
      url: `/exchange-rates/${isoCode}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /exchange-rates - create an exchange rate.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Exchange rate payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
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
