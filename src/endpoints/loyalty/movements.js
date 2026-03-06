/* eslint-disable max-len */
const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /programs/:programId/movements and related (loyalty). Documented from client; backend may support pagination/filters.
 * @typedef {Object} LoyaltyMovementsQuery
 * @property {number} [page] - Page (if supported)
 * @property {number} [recordsPerPage] - Records per page (if supported)
 */

/**
 * Factory for loyalty movements API.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, balance: Object }}
 */
function movementsFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /programs/:programId/movements - list movements.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.programId - Program id
   * @param {LoyaltyMovementsQuery} [opts.query] - page, recordsPerPage (if supported by backend); forwarded to API
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, programId, query = {}, headers}) {
    return client({
      url: `/programs/${programId}/movements`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /programs/:programId/movements - create movement.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.programId - Program id
   * @param {Object} opts.movement - Movement payload
   * @param {LoyaltyMovementsQuery} [opts.query] - page, recordsPerPage (if supported by backend); forwarded to API
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, programId, movement, query = {}, headers}) {
    return client({
      url: `/programs/${programId}/movements`,
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: movement
    });
  }

  const balance = {
    /**
     * GET /programs/:programId/movements/balance/:customerId - get balance.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.programId - Program id
     * @param {string} opts.customerId - Customer id
     * @param {LoyaltyMovementsQuery} [opts.query] - page, recordsPerPage (if supported by backend); forwarded to API
     * @param {Object} [opts.headers] - Optional request headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get({token, jwtToken, programId, customerId, query = {}, headers}) {
      return client({
        url: `/programs/${programId}/movements/balance/${customerId}`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    create,
    balance
  };
}

module.exports = movementsFactory;
