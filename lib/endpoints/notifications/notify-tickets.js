"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function notifyTicketFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    tickets: {
      create: function create(_ref2) {
        var token = _ref2.token,
            jwtToken = _ref2.jwtToken,
            query = _ref2.query,
            operation = _ref2.operation,
            to = _ref2.to,
            ticketId = _ref2.ticketId,
            headers = _ref2.headers;

        return client({
          url: "/notify-tickets/" + ticketId,
          method: "post",
          params: query,
          data: {
            to: to,
            operation: operation
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    }
  };
}

module.exports = notifyTicketFactory;