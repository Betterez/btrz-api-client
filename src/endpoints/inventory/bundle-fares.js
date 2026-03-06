const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /bundle/:bundleId/product/:productId (btrz-api-inventory). See get-bundle-fares getSpec().
 * @typedef {Object} BundleFaresQuery
 * @property {string} [providerIds] - Comma-separated provider IDs
 * @property {string} [channel] - Channel filter
 */

/**
 * Factory for bundle-fares API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function bundleFaresFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /bundle/:bundleId/product/:productId - list bundle fares.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.bundleId - Bundle id
   * @param {string} opts.productId - Product id
   * @param {BundleFaresQuery} [opts.query] - Query params (providerIds, channel)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, bundleId, productId, query = {}, headers}) {
    return client.get(`/bundle/${bundleId}/product/${productId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = bundleFaresFactory;
