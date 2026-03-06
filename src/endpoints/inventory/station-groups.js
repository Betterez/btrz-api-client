const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for station-groups API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function stationGroupsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /station-groups - list station groups.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client({
      url: "/station-groups",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = stationGroupsFactory;
