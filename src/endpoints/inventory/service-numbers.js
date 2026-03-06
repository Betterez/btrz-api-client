const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for service-numbers endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryServiceNumbersQuery
 */

/**
 * Factory for service-numbers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function }}
 */
function serviceNumbersFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /service-numbers - list service numbers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryServiceNumbersQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/service-numbers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /service-numbers - create service number.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.serviceNumber - Service number payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token, jwtToken, serviceNumber, headers
  }) {
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
   * PUT /service-numbers/:serviceNumberId - update service number.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.serviceNumberId - Service number id
   * @param {Object} opts.serviceNumber - Service number payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({
    jwtToken, token, serviceNumberId, serviceNumber, headers
  }) {
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
   * GET /service-numbers/:serviceNumberId - get service number by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.serviceNumberId - Service number id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, serviceNumberId, jwtToken, headers}) {
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
