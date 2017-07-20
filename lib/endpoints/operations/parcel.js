"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function parcelFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id;

    return client({
      url: "/parcel/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function update(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        parcel = _ref3.parcel,
        locationData = _ref3.locationData;

    return client({
      url: "/parcel/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { parcel: parcel, locationData: locationData }
    });
  }

  return {
    get: get,
    update: update
  };
}

module.exports = parcelFactory;