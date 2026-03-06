"use strict";

/* eslint-disable max-len */
var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /redeemable-items/:redeemableItemId (btrz-api-sales get-redeemable-item getSpec).
 * @typedef {Object} RedeemableItemsGetQuery
 * @property {string} [providerId] - Provider account id
 * @property {string} [providerIds] - One or more provider account ids (comma-separated)
 * @property {string} [cartId] - Current cart id (item can be redeemed once per cart)
 */

/**
 * Query params for GET /redeemable-items list (btrz-api-sales get-redeemable-items getSpec).
 * @typedef {Object} RedeemableItemsListQuery
 * @property {string} [ids] - Redeemable item display ID or _id, comma-separated
 * @property {string} [providerId] - Provider account id
 * @property {string} [cartId] - Current cart id
 */

/**
 * Factory for redeemable-items API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, getValid: function }}
 */


function redeemableItemsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /redeemable-items/:redeemableItemId - get redeemable item by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.redeemableItemId - Redeemable item display ID or _id
   * @param {RedeemableItemsGetQuery} [opts.query] - Query params (providerId, providerIds, cartId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        redeemableItemId = _ref2.redeemableItemId,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/redeemable-items/" + redeemableItemId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /redeemable-items - get valid redeemable items.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {RedeemableItemsListQuery} [opts.query] - Query params (ids, providerId, cartId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function getValid(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/redeemable-items",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, headers: headers })
    });
  }

  return {
    get: get,
    getValid: getValid
  };
}

module.exports = redeemableItemsFactory;