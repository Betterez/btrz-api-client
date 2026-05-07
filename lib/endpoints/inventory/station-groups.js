

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /station-groups (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} StationGroupsListQuery
 * @property {string} [providerIds] - Provider ids to get station groups for
 */

/**
 * Factory for station-groups API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */


function stationGroupsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /station-groups - list station groups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {StationGroupsListQuery} [opts.query] - Query params (e.g. providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/station-groups", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = stationGroupsFactory;
