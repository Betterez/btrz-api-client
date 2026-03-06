/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

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
function websalesConfigFactory({client, internalAuthTokenProvider}) {
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
  function get({token, jwtToken, query = {}, headers}) {
    return client({
      params: query,
      url: "/websales-config",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
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
  function update({token, jwtToken, websalesConfigId, websalesConfig, headers}) {
    return client({
      url: `/websales-config/${websalesConfigId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: websalesConfig
    });
  }

  return {
    get,
    update
  };
}

module.exports = websalesConfigFactory;
