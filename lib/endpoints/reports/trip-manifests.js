

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /trip-manifests (btrz-api-reports). Documented from client; backend may support pagination/filters.
 * @typedef {Object} TripManifestsListQuery
 * @property {number} [page] - Page (if supported)
 * @property {number} [recordsPerPage] - Records per page (if supported)
 */

/**
 * Factory for trip manifests reports API (btrz-api-reports).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function tripManifestsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /trip-manifests - list trip manifests.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TripManifestsListQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/trip-manifests",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = tripManifestsFactory;
