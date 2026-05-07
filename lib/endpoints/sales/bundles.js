

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /bundles (btrz-api-sales get-bundles getSpec).
 * @typedef {Object} BundlesListQuery
 * @property {string} [providerId] - Provider account id to get bundles for
 * @property {string} type - Filter bundles by bundle type (required)
 */

/**
 * Factory for bundles API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function bundlesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /bundles - list bundles.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {BundlesListQuery} [opts.query] - Query params (type required)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/bundles", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = bundlesFactory;
