const {authorizationHeaders} = require("./../endpoints_helpers");

function ticketsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/tickets/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function patch({token, jwtToken, id, operations, warningsEnabled, headers}) {
    return client({
      url: `/tickets/${id}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {operations, warningsEnabled}
    });
  }

  function companionTickets({token, jwtToken, ticketId, headers}) {
    return client({
      url: `/tickets/${ticketId}/companion-tickets`,
      headers: authorizationHeaders({token, jwtToken, headers})
    });
  }

  return {
    get,
    patch,
    companionTickets
  };
}

module.exports = ticketsFactory;
