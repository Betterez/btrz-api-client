/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /paths (btrz-api-coltrane). See get-paths getSpec().
 * @typedef {Object} ColtranePathsListQuery
 * @property {string} [providerId] - Account ID of the travel provider (required by API)
 * @property {string} [productId] - Product ID belonging to the provider (required by API)
 * @property {string} [originId] - Origin station id (required by API)
 * @property {string} [destinationId] - Destination station id (required by API)
 * @property {string} [departureFromDate] - Start of search interval; ISO 8601 (e.g. 2021-10-07T17:30:00.000-0400)
 * @property {string} [departureToDate] - End of search interval; ISO 8601; interval max 25h
 * @property {string} [metrics] - If true, response includes metrics (debugging)
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
   * @param {ColtranePathsListQuery} [opts.query] - Query params (providerId, productId, originId, destinationId, etc.)
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
