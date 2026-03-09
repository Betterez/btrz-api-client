const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /countries (btrz-api-inventory). See get-countries getSpec().
 * @typedef {Object} CountriesListQuery
 * @property {string} [isoCode] - Country 2- or 3-letter ISO code (must be 2 or 3 chars if provided)
 */

/**
 * Query params for GET /countries/:countryId (btrz-api-inventory). See getCountryById getSpec().
 * @typedef {Object} CountryGetQuery
 * @property {string} [include] - Address level to include: "provinces" (default), "counties", "cities", "neighborhoods"
 * @property {string} [parentKey] - Parent address level to filter by when include is not provinces
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
   * GET /countries — List countries. Optional filter by isoCode (2 or 3 characters).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {CountriesListQuery} [opts.query] - Query params (isoCode)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ countries: Object[] }>>}
   * @throws 400 Validation failure (e.g. invalid isoCode length)
   * @throws 401 Unauthorized
   * @throws 500 Internal server error
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/countries",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /countries/:id — Get country by id. Optional include (provinces/counties/cities/neighborhoods) and parentKey.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth
   * @param {string} opts.id - Country id (24 hex)
   * @param {CountryGetQuery} [opts.query] - Query params (include, parentKey)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ country: Object }>>}
   * @throws 400 INVALID_COUNTRY_ID
   * @throws 401 Unauthorized
   * @throws 404 COUNTRY_NOT_FOUND
   * @throws 500 Internal server error
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
