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
        referenceNumber = _ref2.referenceNumber,
        headers = _ref2.headers;

    return client.get("/referenced-payments/" + transactionId + "/" + referenceNumber + "/status", {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        externalType = _ref3.externalType,
        referenceNumber = _ref3.referenceNumber,
        paymentResult = _ref3.paymentResult,
        headers = _ref3.headers;

    return client({
      url: "/referenced-payments/" + externalType + "/" + referenceNumber + "/results",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, headers: headers }),
      data: { paymentResult: paymentResult }
    });
  }

  return {
    getStatus: getStatus,
    update: update
  };
}

module.exports = referencedPaymentsFactory;