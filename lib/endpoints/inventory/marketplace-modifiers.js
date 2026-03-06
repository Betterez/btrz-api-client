"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /marketplace-modifiers (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} MarketplaceModifiersListQuery
 * @property {string} [externalField1] - Filter by externalField1
 * @property {string} [externalField2] - Filter by externalField2
 * @property {string} [externalField3] - Filter by externalField3
 * @property {string} [createdBy] - Comma-separated user IDs (created by)
 * @property {string} [updatedBy] - Comma-separated user IDs (updated by)
 * @property {string} [earliestPurchaseDate] - ISO 8601 datetime (purchase on or after)
 * @property {string} [latestPurchaseDate] - ISO 8601 datetime (purchase on or before)
 * @property {string} [earliestTravelDate] - ISO 8601 datetime (trip depart on or after)
 * @property {string} [latestTravelDate] - ISO 8601 datetime (trip depart on or before)
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
   * @param {MarketplaceModifiersListQuery} [opts.query] - Query params
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
   * GET /marketplace-modifiers/:marketplaceModifierId - get marketplace modifier by id. API does not accept query params.
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
   * POST /marketplace-modifiers - create marketplace modifier. API does not accept query params.
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
   * DELETE /marketplace-modifiers/:marketplaceModifierId - remove marketplace modifier. API does not accept query params.
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
   * PUT /marketplace-modifiers/:marketplaceModifierId - update marketplace modifier. API does not accept query params.
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