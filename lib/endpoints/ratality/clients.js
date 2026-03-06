"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for Ratality clients API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @param {string} deps.version - API version path
 * @returns {{ create: function, get: function }}
 */


function clientsFactory(_ref) {
  var client = _ref.client,
      version = _ref.version;

  /**
   * POST /:version/client - create client.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - Request body
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref2) {
    var jwtToken = _ref2.jwtToken,
        data = _ref2.data,
        headers = _ref2.headers;

    return client({
      url: "/" + version + "/client",
      method: "post",
      headers: authorizationHeaders({ jwtToken: jwtToken, headers: headers }),
      data: data
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
    var jwtToken = _ref3.jwtToken,
        clientId = _ref3.clientId;

    return client({
      url: "/" + version + "/client",
      method: "get",
      headers: Object.assign({ clientId: clientId }, authorizationHeaders({ jwtToken: jwtToken }))
    });
  }

  return {
    create: create,
    get: get
  };
}

module.exports = clientsFactory;