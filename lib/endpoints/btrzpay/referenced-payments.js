"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function referencedPaymentsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function getStatus(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        transactionId = _ref2.transactionId,
        referenceNumber = _ref2.referenceNumber;

    return client.get("/referenced-payments/" + transactionId + "/" + referenceNumber + "/status", {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    getStatus: getStatus
  };
}

module.exports = referencedPaymentsFactory;