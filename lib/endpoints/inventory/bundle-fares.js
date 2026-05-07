

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function bundleFaresFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function all(_ref2) {
    const token = _ref2.token;
    const bundleId = _ref2.bundleId;
    const productId = _ref2.productId;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
