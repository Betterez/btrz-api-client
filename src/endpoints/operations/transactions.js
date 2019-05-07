const {authorizationHeaders} = require("./../endpoints_helpers");

function transactionsFactory({client}) {
  function get({token, jwtToken, trxId}) {
    return client({
      url: `/transactions/${trxId}`,
      headers: authorizationHeaders({token, jwtToken})
    });
  }

  function appliedInsurance({token, jwtToken, trxId}) {
    return client({
      url: `/transactions/${trxId}/applied-insurance`,
      headers: authorizationHeaders({token, jwtToken})
    });
  }

  function companionTickets({token, jwtToken, transactionId, ticketIds}) {
    return client({
      url: `/transactions/${transactionId}/companion-tickets`,
      params: {
        ticketIds: ticketIds.join(",")
      },
      headers: authorizationHeaders({token, jwtToken})
    });
  }

  return {
    get,
    appliedInsurance,
    companionTickets
  };
}

module.exports = transactionsFactory;
