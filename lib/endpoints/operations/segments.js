"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /products/:productId/segments/:ticketId (btrz-api-operations). Client passes providerId as query.
 * @typedef {Object} SegmentsListQuery
 * @property {string} [providerId] - Provider/account id
 */

/**
 * Factory for segments API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} segments API methods
 */


function segmentsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /products/:productId/segments/:ticketId - list segments for product/ticket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.productId - Product id
   * @param {string} opts.ticketId - Ticket id
   * @param {string} [opts.providerId] - Provider id (sent as query param)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        productId = _ref2.productId,
        ticketId = _ref2.ticketId,
        providerId = _ref2.providerId,
        headers = _ref2.headers;

    return client({
      url: "/products/" + productId + "/segments/" + ticketId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: {
        providerId: providerId
      }
    });
  }

  return {
    all: all
  };
}

module.exports = segmentsFactory;