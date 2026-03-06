"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for network API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ agencies: { all: function, get: function, update: function, create: function, removeProduct: function, removeFare: function } }}
 */


function networkFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var agencies = {
    /**
     * GET /network/agencies - list agencies.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/network/agencies",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * GET /network/agencies/:sellerId - get an agency by seller id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} opts.sellerId - Seller/agency id (ObjectId)
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    get: function get(_ref3) {
      var token = _ref3.token,
          query = _ref3.query,
          headers = _ref3.headers,
          sellerId = _ref3.sellerId;

      return client({
        url: "/network/agencies/" + sellerId,
        params: query,
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * PUT /network/agencies/:sellerId - update an agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.sellerId - Seller/agency id (ObjectId)
     * @param {Object} opts.agency - Agency payload
     * @param {Object} [opts.query] - Query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    update: function update(_ref4) {
      var jwtToken = _ref4.jwtToken,
          token = _ref4.token,
          sellerId = _ref4.sellerId,
          agency = _ref4.agency,
          headers = _ref4.headers,
          query = _ref4.query;

      return client({
        url: "/network/agencies/" + sellerId,
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          agency: agency
        },
        params: query
      });
    },

    /**
     * POST /network/agencies - create an agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {Object} opts.agency - Agency payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref5) {
      var jwtToken = _ref5.jwtToken,
          token = _ref5.token,
          agency = _ref5.agency,
          headers = _ref5.headers;

      return client({
        url: "/network/agencies",
        method: "post",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          agency: agency
        }
      });
    },

    /**
     * PUT /network/agencies/remove-product - remove product from agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.productId - Product id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    removeProduct: function removeProduct(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          productId = _ref6.productId,
          headers = _ref6.headers;

      return client({
        url: "/network/agencies/remove-product",
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          productId: productId
        }
      });
    },

    /**
     * PUT /network/agencies/remove-fare - remove fare from agency.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id (ObjectId)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    removeFare: function removeFare(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          fareId = _ref7.fareId,
          headers = _ref7.headers;

      return client({
        url: "/network/agencies/remove-fare",
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          fareId: fareId
        }
      });
    }
  };

  return {
    agencies: agencies
  };
}

module.exports = networkFactory;