const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

/**
 * Factory for vehicle-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
function vehicleTypesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /vehicle-types - list vehicle types (e.g. Bus, Shuttle, Van, Train, Ferry, Tram). No query or path params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ vehicleTypes: Array<{ _id: string, name: string }> }>>}
   */
  function all({token, jwtToken, headers}) {
    return client.get("/vehicle-types", {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = vehicleTypesFactory;
