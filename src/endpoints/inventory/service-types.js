const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for service-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
function serviceTypesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /service-types - list service types. API does not accept query params (getSpec has no query parameters).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
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
  function get({serviceTypeId, token, headers}) {
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
  function create({jwtToken, token, serviceType, headers}) {
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
  function remove({jwtToken, serviceTypeId, token, headers}) {
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
  function update({jwtToken, token, serviceTypeId, serviceType, headers}) {
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
