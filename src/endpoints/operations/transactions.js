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

  return {
    all,
    get,
    getTickets,
    appliedInsurance,
    companionTickets,
    expireAll,
    payments
  };
}

module.exports = transactionsFactory;
