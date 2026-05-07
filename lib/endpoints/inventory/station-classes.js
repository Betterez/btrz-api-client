

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /station-classes (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} StationClassesListQuery
 * @property {number} [page] - Page number to retrieve
 * @property {string} [name] - Filter by station class name
 */

/**
 * Factory for station-classes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, remove: function, create: function }}
 */


function stationClassFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /station-classes - list station classes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {StationClassesListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client({
      url: "/station-classes",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /station-classes/:stationClassId - get station class by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.stationClassId - Station class id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const stationClassId = _ref3.stationClassId;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

    return client({
      url: `/station-classes/${stationClassId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * PUT /station-classes/:stationClassId - update station class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.stationClassId - Station class id
   * @param {Object} opts.data - Station class payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    const token = _ref4.token;
    const jwtToken = _ref4.jwtToken;
    const stationClassId = _ref4.stationClassId;
    const data = _ref4.data;
    const headers = _ref4.headers;

    return client({
      url: `/station-classes/${stationClassId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  /**
   * DELETE /station-classes/:stationClassId - remove station class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.stationClassId - Station class id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    const token = _ref5.token;
    const jwtToken = _ref5.jwtToken;
    const stationClassId = _ref5.stationClassId;
    const headers = _ref5.headers;

    return client({
      url: `/station-classes/${stationClassId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /station-classes - create station class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Station class payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref6) {
    const token = _ref6.token;
    const jwtToken = _ref6.jwtToken;
    const data = _ref6.data;
    const headers = _ref6.headers;

    return client({
      url: "/station-classes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = stationClassFactory;
