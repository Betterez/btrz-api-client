"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function filteredTripsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        tripSegmentsId = _ref2.tripSegmentsId,
        headers = _ref2.headers;

    return client({
      url: "/filtered-trips",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { tripSegmentsId: tripSegmentsId }
    });
  }

  return {
    create: create
  };
}

module.exports = filteredTripsFactory;