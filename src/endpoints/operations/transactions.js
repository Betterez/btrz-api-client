const {authorizationHeaders} = require("./../endpoints_helpers");

function transactionsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, trxId, query, headers}) {
    return client({
      url: `/transactions/${trxId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/transactions",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function getTickets({token, jwtToken, trxId, headers}) {
    return client({
      url: `/transactions/${trxId}/tickets`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function appliedInsurance({token, jwtToken, trxId, headers}) {
    return client({
      url: `/transactions/${trxId}/applied-insurance`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function companionTickets({token, jwtToken, transactionId, ticketIds, headers}) {
    return client({
      url: `/transactions/${transactionId}/companion-tickets`,
      params: {
        ticketIds: ticketIds.join(",")
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function expireAll({internalAuthTokenProvider, jwtToken, transactionId, avoidEmail, token, headers}) {
    return client({
      url: "/transactions/status",
      method: "patch",
      params: {},
      headers: authorizationHeaders({internalAuthTokenProvider, jwtToken, token, headers}),
      data: {
        operation: {
          name: "expire_payment",
          transactionIds: [transactionId],
          avoidEmail
        }
      }
    });
  }

  function cancellableItems({token, jwtToken, transactionId, headers, displayAll, channel}) {
    return client({
      url: `/transactions/${transactionId}/cancellable-items`,
      params: {
        displayAll: displayAll ? true : false,
        channel: channel || ""
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  const payments = {
    update({token, jwtToken, trxId, paymentResult, headers}) {
      return client({
        url: `/transactions/${trxId}/payments`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          paymentResult
        }
      });
    }
  };

  const invoices = {
    create({token, jwtToken, transactionId, query, invoice, headers}) {
      return client({
        url: `/transactions/${transactionId}/invoices`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: invoice
      });
    }
  };

  const creditNotes = {
    create({token, jwtToken, transactionId, query, creditNote, headers}) {
      return client({
        url: `/transactions/${transactionId}/credit-notes`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: creditNote
      });
    }
  };

  return {
    all,
    get,
    getTickets,
    appliedInsurance,
    companionTickets,
    expireAll,
    cancellableItems,
    payments,
    invoices,
    creditNotes
  };
}

module.exports = transactionsFactory;
