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

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client({
      url: "/parcels",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function update(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        parcel = _ref4.parcel,
        locationData = _ref4.locationData;

    return client({
      url: "/parcel/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { parcel: parcel, locationData: locationData }
    });
  }

  return {
    get: get,
    all: all,
    update: update
  };
}

module.exports = parcelFactory;