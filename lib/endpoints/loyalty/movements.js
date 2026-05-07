

/* eslint-disable max-len */
const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

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


function movementsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
  function all(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const programId = _ref2.programId;
    const _ref2$query = _ref2.query;
    const query = _ref2$query === undefined ? {} : _ref2$query;
    const headers = _ref2.headers;

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
  function create(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const programId = _ref3.programId;
    const movement = _ref3.movement;
    const _ref3$query = _ref3.query;
    const query = _ref3$query === undefined ? {} : _ref3$query;
    const headers = _ref3.headers;

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
    get: function get(_ref4) {
      const token = _ref4.token;
      const jwtToken = _ref4.jwtToken;
      const programId = _ref4.programId;
      const customerId = _ref4.customerId;
      const _ref4$query = _ref4.query;
      const query = _ref4$query === undefined ? {} : _ref4$query;
      const headers = _ref4.headers;

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
