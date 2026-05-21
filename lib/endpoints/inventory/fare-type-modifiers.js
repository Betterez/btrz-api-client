"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fare-type-modifiers (btrz-api-inventory). See get-handler getSpec().
 * @typedef {Object} FareTypeModifiersListQuery
 */

/**
 * Factory for fare-type-modifiers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */


function fareTypeModifierFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fare-type-modifiers - list fare-type modifiers (paginated).
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {FareTypeModifiersListQuery} [opts.query] - Query params
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifiers: Object[], next?: string, previous?: string, count: number }>>}
   * @throws
   * - 401 Unauthorized
   * - 500 Internal server error
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/fare-type-modifiers", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * GET /fare-type-modifiers/:fareTypeModifierId - get fare-type modifier by id. API does not accept query params.
   * @param {Object} opts
   * @param {string} opts.fareTypeModifierId - Fare-type modifier id (24 hex characters)
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifier: Object }>>}
   * @throws
   * - 400 WRONG_DATA, WRONG_FARE_TYPE_MODIFIER_ID
   * - 401 Unauthorized
   * - 404 FARE_TYPE_MODIFIER_NOT_FOUND
   * - 500 Internal server error
   */
  function get(_ref3) {
    var fareTypeModifierId = _ref3.fareTypeModifierId,
        token = _ref3.token,
        headers = _ref3.headers;

    return client.get("/fare-type-modifiers/" + fareTypeModifierId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /fare-type-modifiers - create fare-type modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {Object} opts.fareTypeModifier - Fare-type modifier payload (FareTypeModifierPostData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifier: Object }>>}
   * @throws
   * - 400 WRONG_DATA, *_NOT_FOUND, INVALID_*, DUPLICATE_*
   * - 401 Unauthorized
   * - 500 Internal server error
   */
  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        fareTypeModifier = _ref4.fareTypeModifier,
        headers = _ref4.headers;

    return client({
      url: "/fare-type-modifiers",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        fareTypeModifier: fareTypeModifier
      }
    });
  }

  /**
   * DELETE /fare-type-modifiers/:fareTypeModifierId - remove fare-type modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fareTypeModifierId - Fare-type modifier id (24 hex characters)
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifierId: string }>>}
   * @throws
   * - 400 WRONG_FARE_TYPE_MODIFIER_ID
   * - 401 Unauthorized
   * - 404 FARE_TYPE_MODIFIER_NOT_FOUND
   * - 500 Internal server error
   */
  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        fareTypeModifierId = _ref5.fareTypeModifierId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/fare-type-modifiers/" + fareTypeModifierId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * PUT /fare-type-modifiers/:fareTypeModifierId - update fare-type modifier. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.fareTypeModifierId - Fare-type modifier id (24 hex characters)
   * @param {Object} opts.fareTypeModifier - Fare-type modifier payload (FareTypeModifierPutData)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ fareTypeModifier: Object }>>}
   * @throws
   * - 400 WRONG_DATA, *_NOT_FOUND, INVALID_*, DUPLICATE_*
   * - 401 Unauthorized
   * - 404 FARE_TYPE_MODIFIER_NOT_FOUND
   * - 500 Internal server error
   */
  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        fareTypeModifierId = _ref6.fareTypeModifierId,
        fareTypeModifier = _ref6.fareTypeModifier,
        headers = _ref6.headers;

    return client({
      url: "/fare-type-modifiers/" + fareTypeModifierId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        fareTypeModifier: fareTypeModifier
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

module.exports = fareTypeModifierFactory;