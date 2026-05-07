"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fares (btrz-api-inventory). See get-fares getSpec().
 * @typedef {Object} InventoryFaresQuery
 * @property {string} [providerIds] - Comma-separated provider IDs to get fares for
 * @property {string} [productIds] - Comma-separated product IDs to get fares for
 * @property {string} [productTypes] - Product type names to get fares for
 * @property {string} [channels] - Filter by channels (must be allowed channel values)
 * @property {string} [isBaseFare] - Filter by base fare [true, false]
 * @property {string} [enabled] - Filter by enabled [true, false]
 */

/**
 * Factory for fares API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, update: function, create: function, adjustments: { create: function, remove: function } }}
 */


function faresFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fares - list fares.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryFaresQuery} [opts.query] - Query params (providerIds, productIds, productTypes, channels, isBaseFare, enabled)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /fare/:id - get fare by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.id - Fare id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var token = _ref3.token,
        id = _ref3.id,
        headers = _ref3.headers;

    return client.get("/fare/" + id, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /fares - create fare. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fare - Fare payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        fare = _ref4.fare,
        headers = _ref4.headers;

    return client({
      url: "/fares",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fare: fare }
    });
  }

  /**
   * PUT /fare/:fareId - update fare. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fareId - Fare id
   * @param {Object} opts.fare - Fare payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        fareId = _ref5.fareId,
        fare = _ref5.fare,
        headers = _ref5.headers;

    return client({
      url: "/fare/" + fareId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fare: fare }
    });
  }

  var adjustments = {
    /**
     * POST /fares/:fareId/adjustments-overrides - create adjustments override. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id
     * @param {Object} opts.adjustmentsOverride - Adjustments override payload
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    create: function create(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          fareId = _ref6.fareId,
          adjustmentsOverride = _ref6.adjustmentsOverride,
          headers = _ref6.headers;

      return client({
        url: "/fares/" + fareId + "/adjustments-overrides",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { adjustmentsOverride: adjustmentsOverride }
      });
    },


    /**
     * DELETE /fares/:fareId/adjustments-override/:adjustmentId - remove adjustments override. API does not accept query params.
     * @param {Object} opts
     * @param {string} [opts.token] - API key
     * @param {string} [opts.jwtToken] - JWT or internal auth symbol
     * @param {string} opts.fareId - Fare id
     * @param {string} opts.adjustmentId - Adjustment id
     * @param {Object} [opts.headers] - Optional headers
     * @returns {Promise<import("axios").AxiosResponse>}
     */
    remove: function remove(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          fareId = _ref7.fareId,
          adjustmentId = _ref7.adjustmentId,
          headers = _ref7.headers;

      return client({
        url: "/fares/" + fareId + "/adjustments-override/" + adjustmentId,
        method: "delete",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        })
      });
    }
  };

  return {
    all: all,
    get: get,
    update: update,
    create: create,
    adjustments: adjustments
  };
}

module.exports = faresFactory;