"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

/**
 * Query params for GET /fare-classes (btrz-api-inventory). See get-fare-classes getSpec().
 * @typedef {Object} InventoryFareClassesQuery
 * @property {string} [providerId] - Provider whose fare classes to return
 * @property {string} [productIds] - Comma-separated product IDs to get fare classes for
 */

/**
 * Factory for fare-classes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function }}
 */


function fareClassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET /fare-classes - list fare classes.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {InventoryFareClassesQuery} [opts.query] - Query params (providerId, productIds)
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
      url: "/fare-classes",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  /**
   * POST /fare-classes - create fare class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.fareClass - Fare class payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        fareClass = _ref3.fareClass,
        headers = _ref3.headers;

    return client({
      url: "/fare-classes",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { fareClass: fareClass }
    });
  }

  /**
   * PATCH /fare-classes/:fareClassId - update fare class. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.fareClassId - Fare class id
   * @param {Object} opts.update - Update payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  // eslint-disable-next-line no-shadow -- param name matches API
  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        fareClassId = _ref4.fareClassId,
        update = _ref4.update,
        headers = _ref4.headers;

    return client({
      url: "/fare-classes/" + fareClassId,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { update: update }
    });
  }

  return {
    all: all,
    create: create,
    update: update
  };
}

module.exports = fareClassesFactory;