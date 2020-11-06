const {authorizationHeaders} = require("./../endpoints_helpers");

function transactionsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, trxId}) {
    return client({
      url: `/transactions/${trxId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function getTickets({token, jwtToken, trxId}) {
    return client({
      url: `/transactions/${trxId}/tickets`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function appliedInsurance({token, jwtToken, trxId}) {
    return client({
      url: `/transactions/${trxId}/applied-insurance`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function companionTickets({token, jwtToken, transactionId, ticketIds}) {
    return client({
      url: `/transactions/${transactionId}/companion-tickets`,
      params: {
        ticketIds: ticketIds.join(",")
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function expireAll({internalAuthTokenProvider, jwtToken, transactionId, avoidEmail, token}) {
    return client({
      url: "/transactions/status",
      method: "patch",
      params: {},
      headers: authorizationHeaders({internalAuthTokenProvider, jwtToken, token}),
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
    get,
    getTickets,
    appliedInsurance,
    companionTickets,
    expireAll
  };
}

module.exports = transactionsFactory;
