const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /travel-routes (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} TravelRoutesQuery
 * @property {number} [page] - The page number to retrieve (positive integer)
 * @property {string} [externalId] - The external id of the travel route
 */

/**
 * Factory for travel-routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
function travelRoutesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /travel-routes - list travel routes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TravelRoutesQuery} [opts.query] - Query params (page, externalId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/travel-routes", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /travel-routes/:travelRouteId - get travel route by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.travelRouteId - Travel route id (ObjectId format)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({travelRouteId, jwtToken, token, headers}) {
    return client.get(`/travel-routes/${travelRouteId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /travel-routes - create travel route.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.travelRoute - Travel route payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, travelRoute, headers}) {
    return client({
      url: "/travel-routes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        travelRoute
      }
    });
  }

  /**
   * PUT /travel-routes/:travelRouteId - update travel route.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.travelRouteId - Travel route id
   * @param {Object} opts.travelRoute - Travel route payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, travelRouteId, travelRoute, headers}) {
    return client({
      url: `/travel-routes/${travelRouteId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        travelRoute
      }
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = travelRoutesFactory;
