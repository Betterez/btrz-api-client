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

  function create(_ref3) {
    var token = _ref3.token,
        parcelZone = _ref3.parcelZone,
        jwtToken = _ref3.jwtToken;

    return client({
      url: "/parcel-zones",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { parcelZone: parcelZone }
    });
  }

  return {
    all: all,
    create: create
  };
}

module.exports = parcelZonesFactory;