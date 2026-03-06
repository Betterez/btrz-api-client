"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for insurances cost endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryInsurancesCostQuery
 */

/**
 * Factory for insurances cost API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */


function insurancesCostFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /insurances/:productId/cost - get insurance cost for product.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.productId - Product id
   * @param {*} opts.declaredValue - Declared value (merged into query)
   * @param {InventoryInsurancesCostQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        productId = _ref2.productId,
        declaredValue = _ref2.declaredValue,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/insurances/" + productId + "/cost", {
      params: Object.assign(query, { declaredValue: declaredValue }),
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = insurancesCostFactory;