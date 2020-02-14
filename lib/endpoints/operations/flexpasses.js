"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function flexpassesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function deleteScanBytripId(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        flexpassId = _ref2.flexpassId,
        tripId = _ref2.tripId;

    return client({
      url: "/flexpasses/" + flexpassId + "/scannings/" + tripId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    deleteScanBytripId: deleteScanBytripId
  };
}

module.exports = flexpassesFactory;