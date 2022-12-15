"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function transactionsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        trxId = _ref2.trxId,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/transactions/" + trxId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        query = _ref3.query,
        headers = _ref3.headers;

    return client({
      url: "/transactions",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  function getTickets(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        trxId = _ref4.trxId,
        headers = _ref4.headers;

    return client({
      url: "/transactions/" + trxId + "/tickets",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function appliedInsurance(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        trxId = _ref5.trxId,
        headers = _ref5.headers;

    return client({
      url: "/transactions/" + trxId + "/applied-insurance",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function companionTickets(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        transactionId = _ref6.transactionId,
        ticketIds = _ref6.ticketIds,
        headers = _ref6.headers;

    return client({
      url: "/transactions/" + transactionId + "/companion-tickets",
      params: {
        ticketIds: ticketIds.join(",")
      },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function expireAll(_ref7) {
    var internalAuthTokenProvider = _ref7.internalAuthTokenProvider,
        jwtToken = _ref7.jwtToken,
        transactionId = _ref7.transactionId,
        avoidEmail = _ref7.avoidEmail,
        token = _ref7.token,
        headers = _ref7.headers;

    return client({
      url: "/transactions/status",
      method: "patch",
      params: {},
      headers: authorizationHeaders({ internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, token: token, headers: headers }),
      data: {
        operation: {
          name: "expire_payment",
          transactionIds: [transactionId],
          avoidEmail: avoidEmail
        }
      }
    });
  }

  function cancellableItems(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        transactionId = _ref8.transactionId,
        headers = _ref8.headers,
        displayAll = _ref8.displayAll,
        channel = _ref8.channel;

    return client({
      url: "/transactions/" + transactionId + "/cancellable-items",
      params: {
        displayAll: displayAll ? true : false,
        channel: channel || ""
      },
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  var payments = {
    update: function update(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          trxId = _ref9.trxId,
          paymentResult = _ref9.paymentResult,
          headers = _ref9.headers;

      return client({
        url: "/transactions/" + trxId + "/payments",
        method: "put",
        headers: authorizationHeaders({
          token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
        }),
        data: {
          paymentResult: paymentResult
        }
      });
    }
  };

  var invoices = {
    create: function create(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          transactionId = _ref10.transactionId,
          query = _ref10.query,
          invoice = _ref10.invoice,
          headers = _ref10.headers;

      return client({
        url: "/transactions/" + transactionId + "/invoices",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: invoice
      });
    }
  };

  var creditNotes = {
    create: function create(_ref11) {
      var token = _ref11.token,
          jwtToken = _ref11.jwtToken,
          transactionId = _ref11.transactionId,
          query = _ref11.query,
          creditNote = _ref11.creditNote,
          headers = _ref11.headers;

      return client({
        url: "/transactions/" + transactionId + "/credit-notes",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: creditNote
      });
    }
  };

  return {
    all: all,
    get: get,
    getTickets: getTickets,
    appliedInsurance: appliedInsurance,
    companionTickets: companionTickets,
    expireAll: expireAll,
    cancellableItems: cancellableItems,
    payments: payments,
    invoices: invoices,
    creditNotes: creditNotes
  };
}

module.exports = transactionsFactory;