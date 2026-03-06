"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for exchange-rates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ allByIsoCode: function, create: function }}
 */


function exchangeRatesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /exchange-rates/:isoCode - get exchange rates by ISO code.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.isoCode - Currency ISO code
   * @param {Object} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function allByIsoCode(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        isoCode = _ref2.isoCode,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      params: query,
      url: "/exchange-rates/" + isoCode,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
  function create(_ref3) {
    var data = _ref3.data,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client({
      url: "/exchange-rates",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    allByIsoCode: allByIsoCode,
    create: create
  };
}

module.exports = exchangeRatesFactory;