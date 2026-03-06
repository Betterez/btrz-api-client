"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for parcel-quotes API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function parcelQuotesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /parcel-quotes - get parcel quote.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.parcelQuoteData - Parcel quote request payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        parcelQuoteData = _ref2.parcelQuoteData,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/parcel-quotes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: parcelQuoteData
    });
  }

  return {
    get: get
  };
}

module.exports = parcelQuotesFactory;