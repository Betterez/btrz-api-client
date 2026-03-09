const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for traveller-card-providers types API (btrz-api-inventory).
 * Returns the list of supported traveller card provider types (e.g. "custom", "caa").
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function travellerCardProvidersTypesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /traveller-card-providers/types - list traveller card provider types (e.g. "custom", "caa"). No query or path params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ travellerCardProviderTypes: Array<{ type: string, properties: Object }> }>>}
   */
  function all({token, jwtToken, headers}) {
    return client.get("/traveller-card-providers/types", {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = travellerCardProvidersTypesFactory;
