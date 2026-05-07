

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for Ratality clients API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @param {string} deps.version - API version path
 * @returns {{ create: function, get: function }}
 */


function clientsFactory(_ref) {
  const client = _ref.client;
  const version = _ref.version;

  /**
   * POST /:version/client - create client.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const data = _ref2.data;
    const headers = _ref2.headers;

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
  function get(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const clientId = _ref3.clientId;

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
