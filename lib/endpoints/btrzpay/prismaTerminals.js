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
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
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
          _ref3$query = _ref3.query,
          query = _ref3$query === undefined ? {} : _ref3$query,
          headers = _ref3.headers;

      return client({
        url: "/prisma-terminals/payments/" + id + "/reversals",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaReversal: prismaReversal }
      });
    },
    delete: function _delete(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          id = _ref4.id,
          _ref4$query = _ref4.query,
          query = _ref4$query === undefined ? {} : _ref4$query,
          headers = _ref4.headers;

      return client({
        url: "/prisma-terminals/reversals/" + id,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    }
  };

  var payments = {
    get: function get(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          id = _ref5.id,
          _ref5$query = _ref5.query,
          query = _ref5$query === undefined ? {} : _ref5$query,
          headers = _ref5.headers;

      return client.get("/prisma-terminals/payments/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          prismaPayment = _ref6.prismaPayment,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query,
          headers = _ref6.headers;

      return client({
        url: "/prisma-terminals/payments",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaPayment: prismaPayment }
      });
    },
    delete: function _delete(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          id = _ref7.id,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          headers = _ref7.headers;

      return client({
        url: "/prisma-terminals/payments/" + id,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    },
    update: function update(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          id = _ref8.id,
          prismaPayment = _ref8.prismaPayment,
          _ref8$query = _ref8.query,
          query = _ref8$query === undefined ? {} : _ref8$query,
          headers = _ref8.headers;

      return client({
        url: "/prisma-terminals/payments/" + id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { prismaPayment: prismaPayment }
      });
    },

    reversals: reversals
  };

  var settlements = {
    create: function create(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          settlement = _ref9.settlement,
          _ref9$query = _ref9.query,
          query = _ref9$query === undefined ? {} : _ref9$query,
          headers = _ref9.headers;

      return client({
        url: "/prisma-terminals/settlements",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { settlement: settlement }
      });
    }
  };

  return {
    payments: payments,
    settlements: settlements
  };
}

module.exports = prismaTerminalsFactory;