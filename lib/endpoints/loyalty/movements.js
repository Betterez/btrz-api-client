"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

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
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

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
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        programId = _ref2.programId,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/programs/" + programId + "/movements",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
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
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        programId = _ref3.programId,
        movement = _ref3.movement,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/programs/" + programId + "/movements",
      method: "post",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: movement
    });
  }

  var balance = {
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
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          programId = _ref4.programId,
          customerId = _ref4.customerId,
          _ref4$query = _ref4.query,
          query = _ref4$query === undefined ? {} : _ref4$query,
          headers = _ref4.headers;

      return client({
        url: "/programs/" + programId + "/movements/balance/" + customerId,
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    all: all,
    create: create,
    balance: balance
  };
}

module.exports = movementsFactory;