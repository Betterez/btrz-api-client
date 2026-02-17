"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function vehicleTypesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * GET all vehicle types (e.g. Bus, Shuttle, Van, Train, Ferry, Tram).
   * Used when configuring schedule vehicle type or displaying vehicle type in trips/manifests.
   * @param {Object} opts
   * @param {string} opts.token - API key token
   * @param {Object} [opts.query] - Optional query params
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<{data: {vehicleTypes: Array<{_id: string, name: string}>}}>}
   */
  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/vehicle-types", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all
  };
}

module.exports = vehicleTypesFactory;