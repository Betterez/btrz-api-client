/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /paths (btrz-api-coltrane).
 * @typedef {Object} ColtranePathsListQuery
 * @property {string} [providerId] - Provider id
 * @property {string} [productId] - Product id
 * @property {string} [originId] - Origin station id
 * @property {string} [destinationId] - Destination station id
 */

/**
 * Factory for Coltrane paths API (btrz-api-coltrane).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function coltraneFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /paths - list Coltrane paths.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {ColtranePathsListQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/paths",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = coltraneFactory;
