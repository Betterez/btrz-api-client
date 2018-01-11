"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function tripsFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/trips",
      params: query,
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    all: all
  };
}

module.exports = tripsFactory;