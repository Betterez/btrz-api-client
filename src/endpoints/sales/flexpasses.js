/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for flexpasses API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function flexpassesEndpointsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /flexpasses/:flexpassId - get flexpass by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.flexpassId - Flexpass id (24 hex characters)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, flexpassId, headers}) {
    return client({
      url: `/flexpasses/${flexpassId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = flexpassesEndpointsFactory;
