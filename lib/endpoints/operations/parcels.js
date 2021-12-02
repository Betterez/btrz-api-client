"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function parcelFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers;

    return client({
      url: "/parcels/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/parcels",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function addScan(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        operationType = _ref4.operationType,
        locationData = _ref4.locationData,
        headers = _ref4.headers;

    return client({
      url: "/parcels/" + id + "/scans",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operationType: operationType, locationData: locationData }
    });
  }

  return {
    get: get,
    all: all,
    addScan: addScan
  };
}

module.exports = parcelFactory;