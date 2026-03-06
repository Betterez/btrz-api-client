const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Factory for Ratality clients API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @param {string} deps.version - API version path
 * @returns {{ create: function, get: function }}
 */
function clientsFactory({client, version}) {
  /**
   * POST /:version/client - create client.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    jwtToken,
    data,
    headers
  }) {
    return client({
      url: `/${version}/client`,
      method: "post",
      headers: authorizationHeaders({jwtToken, headers}),
      data
    });
  }

  /**
   * GET /:version/client - get client.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.clientId - Client id (sent as header)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({
    jwtToken, clientId
  }) {
    return client({
      url: `/${version}/client`,
      method: "get",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken}))
    });
  }

  return {
    create,
    get
  };
}

module.exports = clientsFactory;
