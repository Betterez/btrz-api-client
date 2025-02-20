"use strict";

var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function prismaTerminalsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var payments = {
    get: function get(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          id = _ref2.id,
          headers = _ref2.headers;

      return client.get("/prisma-terminals/payments/" + id, {
        params: {},
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          prismaPayment = _ref3.prismaPayment,
          headers = _ref3.headers;

      return client({
        url: "/prisma-terminals/payments",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { prismaPayment: prismaPayment }
      });
    }
  };

  return {
    payments: payments
  };
}

module.exports = prismaTerminalsFactory;