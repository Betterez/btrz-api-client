const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for filtered-trips API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function }}
 */
function filteredTripsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /filtered-trips - list filtered trips.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/filtered-trips", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /filtered-trips - create filtered trip.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.tripSegmentsId - Trip segments id payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, tripSegmentsId, headers}) {
    return client({
      url: "/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tripSegmentsId}
    });
  }

  return {
    all,
    create
  };
}

module.exports = filteredTripsFactory;
