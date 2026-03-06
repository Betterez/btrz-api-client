/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} CheckInInfoQuery
 * @property {string} [providerId] - Provider account ID
 */

/**
 * Factory for check-in API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
function checkInInfoFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /check-in/:id - get check-in info.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Check-in id
   * @param {Object} [opts.headers] - Optional headers
   * @param {CheckInInfoQuery} [opts.query] - Query params
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, headers, query = {}}) {
    return client({
      url: `/check-in/${id}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = checkInInfoFactory;
