"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function transactionsFactory(_ref) {
  var client = _ref.client;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        trxId = _ref2.trxId;

    return client({
      url: "/transactions/" + trxId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function appliedInsurance(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        trxId = _ref3.trxId;

    return client({
      url: "/transactions/" + trxId + "/applied-insurance",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function companionTickets(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        trxId = _ref4.trxId;

    return client({
      url: "/transactions/" + trxId + "/companion-tickets",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  return {
    get: get,
    appliedInsurance: appliedInsurance,
    companionTickets: companionTickets
  };
}

module.exports = transactionsFactory;