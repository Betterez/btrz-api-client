

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for service-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function serviceTypesFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /service-types - list service types. API does not accept query params (getSpec has no query parameters).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    const token = _ref2.token;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

    return client.get("/service-types", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /service-types/:serviceTypeId - get service type by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.serviceTypeId - Service type id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    const serviceTypeId = _ref3.serviceTypeId;
    const token = _ref3.token;
    const headers = _ref3.headers;

    return client.get(`/service-types/${serviceTypeId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /service-types - create service type. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.serviceType - Service type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const serviceType = _ref4.serviceType;
    const headers = _ref4.headers;

    return client({
      url: "/service-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceType
      }
    });
  }

  /**
   * DELETE /service-types/:serviceTypeId - remove service type. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.serviceTypeId - Service type id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    const jwtToken = _ref5.jwtToken;
    const serviceTypeId = _ref5.serviceTypeId;
    const token = _ref5.token;
    const headers = _ref5.headers;

    return client({
      url: `/service-types/${serviceTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /service-types/:serviceTypeId - update service type. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.serviceTypeId - Service type id
   * @param {Object} opts.serviceType - Service type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    const jwtToken = _ref6.jwtToken;
    const token = _ref6.token;
    const serviceTypeId = _ref6.serviceTypeId;
    const serviceType = _ref6.serviceType;
    const headers = _ref6.headers;

    return client({
      url: `/service-types/${serviceTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceType
      }
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

module.exports = serviceTypesFactory;
