const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /stations (btrz-api-inventory). See get-stations getSpec().
 * @typedef {Object} StationsQuery
 * @property {string} [providerId] - The id of the provider to get stations for
 * @property {string} [providerIds] - The ids of the providers to get stations for
 * @property {string} [productId] - The id of the product
 * @property {string} [departure] - The id of the origin station
 * @property {string} [province] - The province of the station
 * @property {string} [zone] - The zone of the station
 * @property {string} [type] - The type name of the station
 * @property {string} [name] - The full name of the station
 * @property {string} [partialName] - Full or partial name (case-insensitive match)
 * @property {string} [enabled] - Filter by enabled: "true" | "false"
 * @property {number} [page] - Page for pagination
 * @property {string} [orderBy] - Field to order by
 * @property {string} [orderDir] - Order direction: asc (1) or desc (-1), default 1
 * @property {string} [stationIds] - Comma-separated station ids to return
 * @property {string} [filterHeadStations] - Filter stations that are grouping any station
 * @property {string} [includesStationsGroupFor] - Include stations that group/include the sent station id
 * @property {string} [externalId] - The id of the station in the external system
 * @property {string} [shortcode] - The shortcode of the station to filter by
 */

/**
 * Factory for stations API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function }}
 */
function stationsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /stations/:id - get station by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Station id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, id, headers}) {
    return client.get(`/stations/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /stations - list stations.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {StationsQuery} [opts.query] - Query params (providerId, productId, name, page, etc.)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, query = {}, headers}) {
    return client.get("/stations", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /stations - create station. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Station payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/stations",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        station: data
      }
    });
  }

  /**
   * PUT /station/:stationId - update station. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.stationId - Station id
   * @param {Object} opts.station - Station payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, stationId, station, headers}) {
    return client({
      url: `/station/${stationId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {station}
    });
  }


  return {
    get,
    all,
    create,
    update
  };
}

module.exports = stationsFactory;
