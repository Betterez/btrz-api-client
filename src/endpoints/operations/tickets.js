const {authorizationHeaders} = require("./../endpoints_helpers");

function ticketsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, id}) {
    return client({
      url: `/tickets/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function patch({token, jwtToken, id, operations, warningsEnabled}) {
    return client({
      url: `/tickets/${id}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {operations, warningsEnabled}
    });
  }

  function companionTickets({token, jwtToken, ticketId}) {
    return client({
      url: `/tickets/${ticketId}/companion-tickets`,
      headers: authorizationHeaders({token, jwtToken})
    });
  }

  return {
    get,
    patch,
    companionTickets
  };
}

module.exports = ticketsFactory;
