

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for Ratality integrations API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @param {string} deps.version - API version path
 * @returns {{ get: function, create: function, remove: function }}
 */


function integrationsFactory(_ref) {
  const client = _ref.client;
  const version = _ref.version;

  /**
   * GET /:version/client/integrations - get client integrations.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.clientId - Client id (sent as header)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const clientId = _ref2.clientId;

    return client({
      url: `/${version}/client/integrations`,
      method: "get",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken}))
    });
  }

  /**
   * POST /:version/client/integrations - create integration.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.clientId - Client id (sent as header)
   * @param {Object} opts.data - Request body
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const clientId = _ref3.clientId;
    const data = _ref3.data;

    return client({
      url: `/${version}/client/integrations`,
      method: "post",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken})),
      data
    });
  }

  /**
   * DELETE /:version/client/integrations/:integrationType - remove integration.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.clientId - Client id (sent as header)
   * @param {string} opts.integrationType - Integration type
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const clientId = _ref4.clientId;
    const integrationType = _ref4.integrationType;

    return client({
      url: `/${version}/client/integrations/${integrationType}`,
      method: "delete",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken}))
    });
  }

  return {
    get,
    create,
    remove
  };
}

module.exports = integrationsFactory;
