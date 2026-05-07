

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for parcel-quotes API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function parcelQuotesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * POST /parcel-quotes - request a parcel quote. Body: parcelQuoteData (fromId, toId, productId, channel, parcels). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.parcelQuoteData - Parcel quote request: fromId, toId, productId, channel, parcels (array of { fareId, weight, measure })
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const parcelQuoteData = _ref2.parcelQuoteData;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

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
