"use strict";

/* eslint-disable max-len */
var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /network/agencies (btrz-api-accounts). See get-agencies-handler getSpec().
 * @typedef {Object} NetworkAgenciesListQuery
 * @property {string} [name] - Filter by agency/seller name (prefix, case-insensitive)
 * @property {number} [page] - Page number (1-based)
 */

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
     * GET /network/agencies - list agencies (paginated). Query: name, page.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {NetworkAgenciesListQuery} [opts.query] - Query params (name, page)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ agencies: Array, next?: string, previous?: string, count?: number }>>}
     *   Errors: 401, 500
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
     * GET /network/agencies/:agencyId - get an agency by id.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.sellerId - Seller/agency id (ObjectId), path param agencyId
     * @param {Object} [opts.query] - Optional query params
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{ agency: Object }>>}
     *   Errors: 400 (INVALID_AGENCY_ID), 401, 404 (AGENCY_NOT_FOUND), 500
     */
    get: function get(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          query = _ref3.query,
          headers = _ref3.headers,
          sellerId = _ref3.sellerId;

      return client({
        url: "/network/agencies/" + sellerId,
        params: query || {},
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },

    /**
     * PUT /network/agencies/:sellerId - update an agency. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.sellerId - Seller/agency id (ObjectId)
     * @param {Object} opts.agency - Agency payload
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
     * PUT /network/agencies/remove-product - remove productId from all agencies for the account.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.productId - Product id (non-empty string)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{}>>}
     *   Errors: 400 (WRONG_DATA), 401, 500
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
     * PUT /network/agencies/remove-fare - remove fareId from all agencies for the account.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id (non-empty string)
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse<{}>>}
     *   Errors: 400 (WRONG_DATA), 401, 500
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