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
      url: "/parcels/" + id,
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
        locationData = _ref4.locationData,
        operationType = _ref4.operationType;

    return client({
      url: "/parcels/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { operationType: operationType, locationData: locationData }
    });
  }

  function addScan(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        operationType = _ref5.operationType,
        locationData = _ref5.locationData;

    return client({
      url: "/parcels/" + id + "/scans",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken }),
      data: { operationType: operationType, locationData: locationData }
    });
  }

  return {
    get: get,
    all: all,
    update: update,
    addScan: addScan
  };
}

module.exports = parcelFactory;