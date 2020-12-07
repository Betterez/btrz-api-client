"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function transactionsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        trxId = _ref2.trxId;

    return client({
      url: "/transactions/" + trxId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        query = _ref3.query;

    return client({
      url: "/transactions",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  function getTickets(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        trxId = _ref4.trxId;

    return client({
      url: "/transactions/" + trxId + "/tickets",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function appliedInsurance(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        trxId = _ref5.trxId;

    return client({
      url: "/transactions/" + trxId + "/applied-insurance",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function companionTickets(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        transactionId = _ref6.transactionId,
        ticketIds = _ref6.ticketIds;

    return client({
      url: "/transactions/" + transactionId + "/companion-tickets",
      params: {
        ticketIds: ticketIds.join(",")
      },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function expireAll(_ref7) {
    var internalAuthTokenProvider = _ref7.internalAuthTokenProvider,
        jwtToken = _ref7.jwtToken,
        transactionId = _ref7.transactionId,
        avoidEmail = _ref7.avoidEmail,
        token = _ref7.token;

    return client({
      url: "/transactions/status",
      method: "patch",
      params: {},
      headers: authorizationHeaders({ internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, token: token }),
      data: {
        operation: {
          name: "expire_payment",
          transactionIds: [transactionId],
          avoidEmail: avoidEmail
        }
      }
    });
  }

  return {
    all: all,
    get: get,
    getTickets: getTickets,
    appliedInsurance: appliedInsurance,
    companionTickets: companionTickets,
    expireAll: expireAll
  };
}

module.exports = transactionsFactory;