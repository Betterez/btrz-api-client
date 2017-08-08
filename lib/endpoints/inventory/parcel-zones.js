"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function parcelZonesFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client("/parcel-zones", {
      params: query,
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

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        parcelZoneId = _ref4.parcelZoneId,
        parcelZone = _ref4.parcelZone;

    return client({
      url: "/parcel-zone/" + parcelZoneId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { parcelZone: parcelZone }
    });
  }

  return {
    all: all,
    create: create,
    update: update
  };
}

module.exports = parcelZonesFactory;