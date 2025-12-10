const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function notifyTicketFactory({
  client, internalAuthTokenProvider
}) {
  return {
    childUsers: {
      create({token, jwtToken, email, lang, headers}) {
        return client({
          url: "/notify-child-user",
          method: "post",
          data: {
            email,
            lang
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    },
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
    },
    vouchers: {
      create({token, jwtToken, query, data, headers}) {
        return client({
          url: "/notify-vouchers",
          method: "post",
          params: query,
          data,
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    },
    manifest: {
      create({token, jwtToken, data, headers}) {
        return client({
          url: "/notify-manifest",
          method: "post",
          data,
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    }
  };
}

module.exports = notifyTicketFactory;
