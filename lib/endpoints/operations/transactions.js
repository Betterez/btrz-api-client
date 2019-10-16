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

  function getTickets(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        trxId = _ref3.trxId;

    return client({
      url: "/transactions/" + trxId + "/tickets",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function appliedInsurance(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        trxId = _ref4.trxId;

    return client({
      url: "/transactions/" + trxId + "/applied-insurance",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function companionTickets(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        transactionId = _ref5.transactionId,
        ticketIds = _ref5.ticketIds;

    return client({
      url: "/transactions/" + transactionId + "/companion-tickets",
      params: {
        ticketIds: ticketIds.join(",")
      },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken })
    });
  }

  function expireAll(_ref6) {
    var internalAuthTokenProvider = _ref6.internalAuthTokenProvider,
        jwtToken = _ref6.jwtToken,
        transactionId = _ref6.transactionId,
        avoidEmail = _ref6.avoidEmail;

    return client({
      url: "/transactions/status",
      method: "patch",
      params: {},
      headers: authorizationHeaders({ internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken }),
      data: {
        operation: {
          name: "expire_payment",
          transactionIds: [transactionId],
          avoidEmail
        }
      }
    });
  }

  return {
    get: get,
    getTickets: getTickets,
    appliedInsurance: appliedInsurance,
    companionTickets: companionTickets,
    expireAll: expireAll
  };
}

module.exports = transactionsFactory;