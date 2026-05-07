"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for Ratality integrations API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @param {string} deps.version - API version path
 * @returns {{ get: function, create: function, remove: function }}
 */


function integrationsFactory(_ref) {
  var client = _ref.client,
      version = _ref.version;

  /**
   * GET /:version/client/integrations - get client integrations.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.clientId - Client id (sent as header)
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var jwtToken = _ref2.jwtToken,
        clientId = _ref2.clientId;

    return client({
      url: "/" + version + "/client/integrations",
      method: "get",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken }))
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
    var jwtToken = _ref3.jwtToken,
        clientId = _ref3.clientId,
        data = _ref3.data;

    return client({
      url: "/" + version + "/client/integrations",
      method: "post",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken })),
      data: data
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
    var jwtToken = _ref4.jwtToken,
        clientId = _ref4.clientId,
        integrationType = _ref4.integrationType;

    return client({
      url: "/" + version + "/client/integrations/" + integrationType,
      method: "delete",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken }))
    });
  }

  return {
    get: get,
    create: create,
    remove: remove
  };
}

module.exports = integrationsFactory;