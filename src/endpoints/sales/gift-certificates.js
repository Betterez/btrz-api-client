/* eslint-disable max-len */
const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} GiftCertificateGetQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for gift-certificates API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function giftCertificatesFactory({
  client, internalAuthTokenProvider
}) {
  /**
   * GET /gift-certificates/:GCNumber - get gift certificate by number.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.GCNumber - Gift certificate number
   * @param {GiftCertificateGetQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, GCNumber, query = {}, headers}) {
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
