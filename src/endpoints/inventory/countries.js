const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /countries (btrz-api-inventory). See get-countries getSpec().
 * @typedef {Object} CountriesListQuery
 * @property {string} [isoCode] - Country 2 or 3 letter ISO code
 */

/**
 * Factory for countries API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function }}
 */
function countriesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /countries - list countries.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CountriesListQuery} [opts.query] - Query params (isoCode)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/countries",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /countries/:id - get country by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Country id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/countries/${id}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = countriesFactory;
