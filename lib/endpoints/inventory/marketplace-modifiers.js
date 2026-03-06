"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for marketplace-modifiers endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryMarketplaceModifiersQuery
 */

/**
 * Factory for marketplace-modifiers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function marketplaceModifierFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /marketplace-modifiers - list marketplace modifiers.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {InventoryMarketplaceModifiersQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/marketplace-modifiers", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /marketplace-modifiers/:marketplaceModifierId - get marketplace modifier by id.
   * @param {Object} opts
   * @param {string} opts.marketplaceModifierId - Marketplace modifier id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref3) {
    var marketplaceModifierId = _ref3.marketplaceModifierId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/marketplace-modifiers/" + marketplaceModifierId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /marketplace-modifiers - create marketplace modifier.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.marketplaceModifier - Marketplace modifier payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        marketplaceModifier = _ref4.marketplaceModifier,
        headers = _ref4.headers;

    return client({
      url: "/marketplace-modifiers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        marketplaceModifier: marketplaceModifier
      }
    });
  }

  /**
   * DELETE /marketplace-modifiers/:marketplaceModifierId - remove marketplace modifier.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.marketplaceModifierId - Marketplace modifier id
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        marketplaceModifierId = _ref5.marketplaceModifierId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/marketplace-modifiers/" + marketplaceModifierId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /marketplace-modifiers/:marketplaceModifierId - update marketplace modifier.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.marketplaceModifierId - Marketplace modifier id
   * @param {Object} opts.marketplaceModifier - Marketplace modifier payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        marketplaceModifierId = _ref6.marketplaceModifierId,
        marketplaceModifier = _ref6.marketplaceModifier,
        headers = _ref6.headers;

    return client({
      url: "/marketplace-modifiers/" + marketplaceModifierId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        marketplaceModifier: marketplaceModifier
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = marketplaceModifierFactory;