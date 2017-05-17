"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function parcelZonesFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token;

    return client("/parcel-zones", {
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    all: all
  };
}

module.exports = parcelZonesFactory;