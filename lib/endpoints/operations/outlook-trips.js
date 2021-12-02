"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function outlookTripsFactory(_ref) {
  var client = _ref.client;

  function get(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/outlook-trips",
      headers: authorizationHeaders({ token: token, headers: headers }),
      params: query
    });
  }

  return {
    get: get
  };
}

module.exports = outlookTripsFactory;