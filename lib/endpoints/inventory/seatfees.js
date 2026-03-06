"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for seatfees endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventorySeatfeesQuery
 */

/**
 * Factory for seat-fees API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */


function seatfeesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /seat-fees - list seat fees.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventorySeatfeesQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/seat-fees", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /seat-fees/:seatfeeId - get seat fee by id.
   * @param {Object} opts
   * @param {string} opts.seatfeeId - Seat fee id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var seatfeeId = _ref3.seatfeeId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/seat-fees/" + seatfeeId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /seat-fees - create seat fee.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.seatfee - Seat fee payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        seatfee = _ref4.seatfee,
        headers = _ref4.headers;

    return client({
      url: "/seat-fees",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatfee: seatfee
      }
    });
  }

  /**
   * PUT /seat-fees/:seatfeeId - update seat fee.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.seatfeeId - Seat fee id
   * @param {Object} opts.seatfee - Seat fee payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        seatfeeId = _ref5.seatfeeId,
        seatfee = _ref5.seatfee,
        headers = _ref5.headers;

    return client({
      url: "/seat-fees/" + seatfeeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        seatfee: seatfee
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = seatfeesFactory;