"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /traveller-card-types (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryTravellerCardTypesListQuery
 */

/**
 * Factory for traveller-card-types API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function, remove: function }}
 */


function travellerCardTypesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /traveller-card-types - list traveller card types.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryTravellerCardTypesListQuery} [opts.query] - Optional query params (forwarded to API)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/traveller-card-types",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /traveller-card-types - create traveller card type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.travellerCardType - Traveller card type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        travellerCardType = _ref3.travellerCardType,
        headers = _ref3.headers;

    return client({
      url: "/traveller-card-types",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { travellerCardType: travellerCardType }
    });
  }

  /**
   * PUT /traveller-card-types/:travellerCardTypeId - update traveller card type.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {Object} opts.travellerCardType - Traveller card type payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        travellerCardTypeId = _ref4.travellerCardTypeId,
        travellerCardType = _ref4.travellerCardType,
        headers = _ref4.headers;

    return client({
      url: "/traveller-card-types/" + travellerCardTypeId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { travellerCardType: travellerCardType }
    });
  }

  /**
   * GET /traveller-card-types/:travellerCardTypeId - get traveller card type by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get(_ref5) {
    var token = _ref5.token,
        travellerCardTypeId = _ref5.travellerCardTypeId,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/traveller-card-types/" + travellerCardTypeId,
      method: "get",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  /**
   * DELETE /traveller-card-types/:travellerCardTypeId - remove traveller card type.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} opts.travellerCardTypeId - Traveller card type id
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref6) {
    var token = _ref6.token,
        travellerCardTypeId = _ref6.travellerCardTypeId,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/traveller-card-types/" + travellerCardTypeId,
      method: "delete",
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  return {
    all: all,
    create: create,
    update: update,
    get: get,
    remove: remove
  };
}

module.exports = travellerCardTypesFactory;