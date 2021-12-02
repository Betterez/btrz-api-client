"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function filteredTripsV2Factory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        filteredTrip = _ref2.filteredTrip,
        headers = _ref2.headers;

    return client({
      url: "/v2/filtered-trips",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { filteredTrip: filteredTrip }
    });
  }

  return {
    create: create
  };
}

module.exports = filteredTripsV2Factory;