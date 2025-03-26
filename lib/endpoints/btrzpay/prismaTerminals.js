"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function prismaTerminalsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var reversals = {
    get: function get(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          id = _ref2.id,
          query = _ref2.query,
          headers = _ref2.headers;

      return client.get("/prisma-terminals/reversals/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          id = _ref3.id,
          prismaReversal = _ref3.prismaReversal,
          headers = _ref3.headers;

      return client({
        url: "/prisma-terminals/payments/" + id + "/reversals",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { prismaReversal: prismaReversal }
      });
    }
  };

  var payments = {
    get: function get(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          id = _ref4.id,
          query = _ref4.query,
          headers = _ref4.headers;

      return client.get("/prisma-terminals/payments/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          prismaPayment = _ref5.prismaPayment,
          headers = _ref5.headers;

      return client({
        url: "/prisma-terminals/payments",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { prismaPayment: prismaPayment }
      });
    },

    reversals: reversals
  };

  return {
    payments: payments
  };
}

module.exports = prismaTerminalsFactory;