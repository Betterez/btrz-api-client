

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function travelRoutesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /travel-routes - list travel routes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {TravelRoutesQuery} [opts.query] - Query params (page, externalId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const travelRouteId = _ref3.travelRouteId;
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const headers = _ref3.headers;

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
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const travelRoute = _ref4.travelRoute;
    const headers = _ref4.headers;

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
  function update(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const token = _ref5.token;
    const travelRouteId = _ref5.travelRouteId;
    const travelRoute = _ref5.travelRoute;
    const headers = _ref5.headers;

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
