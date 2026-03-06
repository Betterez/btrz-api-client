/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for parcel-quotes API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function parcelQuotesFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /parcel-quotes - get parcel quote.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.parcelQuoteData - Parcel quote request payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, parcelQuoteData, jwtToken, headers}) {
    return client({
      url: "/parcel-quotes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: parcelQuoteData
    });
  }

  return {
    get
  };
}

module.exports = parcelQuotesFactory;
