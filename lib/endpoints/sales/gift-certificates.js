

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /gift-certificates/:GCNumber (btrz-api-sales get-gift-certificate getSpec).
 * @typedef {Object} GiftCertificateGetQuery
 * @property {string} [providerId] - Provider account id
 * @property {string} [cartId] - Calculate available balance for the voucher applied to the cart
 */

/**
 * Factory for gift-certificates API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function giftCertificatesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /gift-certificates/:GCNumber - get gift certificate by number.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.GCNumber - Gift certificate number
   * @param {GiftCertificateGetQuery} [opts.query] - Query params (providerId, cartId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const token = _ref2.token;
    const GCNumber = _ref2.GCNumber;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: `/gift-certificates/${GCNumber}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = giftCertificatesFactory;
