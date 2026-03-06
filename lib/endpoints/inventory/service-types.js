"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /service-types (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryServiceTypesListQuery
 */

/**
 * Factory for service-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function serviceTypesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /service-types - list service types.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryServiceTypesListQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/service-types", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /service-types/:serviceTypeId - get service type by id.
   * @param {Object} opts
   * @param {string} opts.serviceTypeId - Service type id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var serviceTypeId = _ref3.serviceTypeId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/service-types/" + serviceTypeId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /service-types - create service type.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.serviceType - Service type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        serviceType = _ref4.serviceType,
        headers = _ref4.headers;

    return client({
      url: "/service-types",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        serviceType: serviceType
      }
    });
  }

  /**
   * DELETE /service-types/:serviceTypeId - remove service type.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.serviceTypeId - Service type id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        serviceTypeId = _ref5.serviceTypeId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/service-types/" + serviceTypeId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /service-types/:serviceTypeId - update service type.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.serviceTypeId - Service type id
   * @param {Object} opts.serviceType - Service type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        serviceTypeId = _ref6.serviceTypeId,
        serviceType = _ref6.serviceType,
        headers = _ref6.headers;

    return client({
      url: "/service-types/" + serviceTypeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        serviceType: serviceType
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = serviceTypesFactory;