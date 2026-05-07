

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /garages (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} GaragesQuery
 * @property {string} [location] - The garage's location
 * @property {string} [stationId] - The id of the station associated to the garage
 */

/**
 * Factory for garages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function garagesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /garages - list garages (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {GaragesQuery} [opts.query] - Query params (location, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garages: Array, next?: string, previous?: string, count: number }>>}
   * @throws When response is 4xx/5xx (401, 500)
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/garages", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /garages/:garageId - get garage by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.garageId - Garage id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garage: Object }>>}
   * @throws When response is 4xx/5xx (400 INVALID_GARAGE_ID, 401, 404 GARAGE_NOT_FOUND, 500)
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const garageId = _ref3.garageId;
    const headers = _ref3.headers;

    return client.get(`/garages/${garageId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /garages - create garage.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Garage payload (name, location, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garage: Object }>>}
   * @throws When response is 4xx/5xx (400 WRONG_DATA, 401, 500)
   */
  function create(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const data = _ref4.data;
    const headers = _ref4.headers;

    return client({
      url: "/garages",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  /**
   * PUT /garages/:garageId - update garage.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.garageId - Garage id (24 hex characters)
   * @param {Object} opts.data - Garage payload (name, location, stationId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ garage: Object }>>}
   * @throws When response is 4xx/5xx (400, 401, 404 GARAGE_NOT_FOUND/STATION_NOT_FOUND, 500)
   */
  function update(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const garageId = _ref5.garageId;
    const data = _ref5.data;
    const headers = _ref5.headers;

    return client({
      url: `/garages/${garageId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  /**
   * DELETE /garages/:garageId - remove garage.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.garageId - Garage id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ success: boolean }>>}
   * @throws When response is 4xx/5xx (400 INVALID_GARAGE_ID or GARAGE_WITH_VEHICLES, 401, 404, 500)
   */
  function remove(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const garageId = _ref6.garageId;
    const headers = _ref6.headers;

    return client({
      url: `/garages/${garageId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = garagesFactory;
