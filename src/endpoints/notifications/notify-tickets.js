const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function notifyTicketFactory({
  client, internalAuthTokenProvider
}) {
  return {
    tickets: {
      create({token, jwtToken, query, operation, to, ticketId, headers}) {
        return client({
          url: `/notify-tickets/${ticketId}`,
          method: "post",
          params: query,
          data: {
            to,
            operation
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    }
  };
}

module.exports = notifyTicketFactory;
