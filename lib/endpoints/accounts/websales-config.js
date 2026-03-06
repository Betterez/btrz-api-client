"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /websales-config (btrz-api-accounts). See get-handler getSpec().
 * @typedef {Object} WebsalesConfigListQuery
 * @property {string} [domain] - Filter by domain
 * @property {string} [providerId] - Provider id for websales-config (ObjectId)
 */

/**
 * Factory for websales-config API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function websalesConfigFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /websales-config - get websales config list (paginated). Query: domain, providerId.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {WebsalesConfigListQuery} [opts.query] - Query params (domain, providerId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ websalesConfig: Array, next?: string, previous?: string, count?: number }>>}
   *   Errors: 401, 500
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      params: query,
      url: "/websales-config",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /websales-config/:websalesConfigId - update websales config. Emits webhook websalesConfig.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.websalesConfigId - Websales config id (ObjectId)
   * @param {Object} opts.websalesConfig - Config payload (WebsalesConfigPutData; SSO cannot be updated)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ websalesConfig: Object }>>}
   *   Errors: 400, 401, 404 (WEBSALESCONFIG_NOT_FOUND), 409, 500
   */
  function update(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        websalesConfigId = _ref3.websalesConfigId,
        websalesConfig = _ref3.websalesConfig,
        headers = _ref3.headers;

    return client({
      url: "/websales-config/" + websalesConfigId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: websalesConfig
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = websalesConfigFactory;