"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for multiproduct-sales-settings API (btrz-api-accounts). Multi-product sales settings (product/station/fare/fareClass mappings).
 * Requires BETTEREZ_APP audience. PUT emits webhooks networks.created or networks.updated.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */


function multiproductSalesSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /multiproduct-sales-settings – Get multi-product sales settings for the account.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ multiProductSettings: object }>>}
   */
  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/multiproduct-sales-settings",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /multiproduct-sales-settings – Create or update multi-product sales settings (upsert). Body: MultiProductSettingsPayload (productsMapping, stationsMapping, faresMapping, fareClassesMapping). Emits networks.created or networks.updated.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.data - multiProductSettings payload (productsMapping, stationsMapping, faresMapping, fareClassesMapping; each key ObjectId, each value array of ObjectIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ multiProductSettings: object }>>}
   */
  function update(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        data = _ref3.data,
        headers = _ref3.headers;

    return client({
      url: "/multiproduct-sales-settings",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = multiproductSalesSettingsFactory;