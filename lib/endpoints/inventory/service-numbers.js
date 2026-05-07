

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /service-numbers (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} ServiceNumbersListQuery
 * @property {string} [name] - Filter by service number name
 * @property {boolean} [enabled] - Filter enabled/disabled
 * @property {number} [page] - Page for pagination
 */

/**
 * Factory for service-numbers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */


function serviceNumbersFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /service-numbers - list service numbers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {ServiceNumbersListQuery} [opts.query] - Query params
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
      url: "/service-numbers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /service-numbers - create service number. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.serviceNumber - Service number payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const serviceNumber = _ref3.serviceNumber;
    const headers = _ref3.headers;

    return client({
      url: "/service-numbers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceNumber
      }
    });
  }

  /**
   * PUT /service-numbers/:serviceNumberId - update service number. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.serviceNumberId - Service number id
   * @param {Object} opts.serviceNumber - Service number payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const serviceNumberId = _ref4.serviceNumberId;
    const serviceNumber = _ref4.serviceNumber;
    const headers = _ref4.headers;

    return client({
      url: `/service-numbers/${serviceNumberId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceNumber
      }
    });
  }

  /**
   * GET /service-numbers/:serviceNumberId - get service number by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.serviceNumberId - Service number id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    const token = _ref5.token;
    const serviceNumberId = _ref5.serviceNumberId;
    const jwtToken = _ref5.jwtToken;
    const headers = _ref5.headers;

    return client({
      url: `/service-numbers/${serviceNumberId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    create,
    update,
    get
  };
}

module.exports = serviceNumbersFactory;
