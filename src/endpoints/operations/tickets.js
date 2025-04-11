const {authorizationHeaders} = require("./../endpoints_helpers.js");

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

  function all({token, jwtToken, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: "/tickets",
      params: query_,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function updateDelivery({token, jwtToken, ticketId, data, headers}) {
    return client({
      url: `/tickets/${ticketId}/delivery`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    get,
    all,
    patch,
    companionTickets,
    updateDelivery
  };
}

module.exports = ticketsFactory;
