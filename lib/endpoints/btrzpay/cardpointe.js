"use strict";

var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function cardpointeTerminalsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client.get("/cardpointe-terminals", {
      params: {},
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  function remove(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        merchantId = _ref3.merchantId,
        terminalId = _ref3.terminalId,
        headers = _ref3.headers;

    return client({
      url: "/cardpointe-terminals/" + merchantId + "/" + terminalId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  var readCard = {
    get: function get(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          readCardResultId = _ref4.readCardResultId,
          headers = _ref4.headers;

      return client.get("/cardpointe-terminals/read-card/" + readCardResultId, {
        params: {},
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          readCard = _ref5.readCard,
          headers = _ref5.headers;

      return client({
        url: "/cardpointe-terminals/read-card",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { readCard: readCard }
      });
    }
  };

  var ping = {
    create: function create(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          ping = _ref6.ping,
          headers = _ref6.headers;

      return client({
        url: "/cardpointe-terminals/ping",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: { ping: ping }
      });
    }
  };

  return {
    all: all,
    remove: remove,
    readCard: readCard,
    ping: ping
  };
}
module.exports = {
  cardpointeTerminalsFactory: cardpointeTerminalsFactory
};