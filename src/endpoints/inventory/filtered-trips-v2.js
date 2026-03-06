const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for filtered-trips-v2 API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ create: function }}
 */
function filteredTripsV2Factory({client, internalAuthTokenProvider}) {
  /**
   * POST /v2/filtered-trips - create filtered trip. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.filteredTrip - Filtered trip payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, filteredTrip, headers}) {
    return client({
      url: "/v2/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {filteredTrip}
    });
  }

  return {
    create
  };
}

module.exports = filteredTripsV2Factory;
