const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for traveller-card-providers types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function travellerCardProvidersTypesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /traveller-card-providers/types - list traveller card provider types. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/traveller-card-providers/types", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = travellerCardProvidersTypesFactory;
