"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function mergedFareTablesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        routeId = _ref2.routeId,
        productId = _ref2.productId,
        headers = _ref2.headers;

    return client({
      url: "/coltrane/routes/" + routeId + "/merged-fare-tables/" + productId,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = mergedFareTablesFactory;