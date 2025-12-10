"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function notifyTicketFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    childUsers: {
      create: function create(_ref2) {
        var token = _ref2.token,
            jwtToken = _ref2.jwtToken,
            email = _ref2.email,
            lang = _ref2.lang,
            headers = _ref2.headers;

        return client({
          url: "/notify-child-user",
          method: "post",
          data: {
            email: email,
            lang: lang
          },
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    },
    tickets: {
      create: function create(_ref3) {
        var token = _ref3.token,
            jwtToken = _ref3.jwtToken,
            query = _ref3.query,
            operation = _ref3.operation,
            to = _ref3.to,
            ticketId = _ref3.ticketId,
            headers = _ref3.headers;

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
    },
    vouchers: {
      create: function create(_ref4) {
        var token = _ref4.token,
            jwtToken = _ref4.jwtToken,
            query = _ref4.query,
            data = _ref4.data,
            headers = _ref4.headers;

        return client({
          url: "/notify-vouchers",
          method: "post",
          params: query,
          data: data,
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    },
    manifest: {
      create: function create(_ref5) {
        var token = _ref5.token,
            jwtToken = _ref5.jwtToken,
            data = _ref5.data,
            headers = _ref5.headers;

        return client({
          url: "/notify-manifest",
          method: "post",
          data: data,
          headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
        });
      }
    }
  };
}

module.exports = notifyTicketFactory;