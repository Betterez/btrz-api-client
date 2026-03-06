/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} FlexpassGetQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for flexpasses API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function flexpassesEndpointsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /flexpasses/:flexpassId - get flexpass by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.flexpassId - Flexpass id
   * @param {FlexpassGetQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, flexpassId, query = {}, headers}) {
    return client({
      url: `/flexpasses/${flexpassId}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = flexpassesEndpointsFactory;
