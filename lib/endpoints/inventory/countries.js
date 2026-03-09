"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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


function countriesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/countries",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/countries/" + id,
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    get: get
  };
}

module.exports = countriesFactory;