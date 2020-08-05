"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function paymentTerminalFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/payment-terminals", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function get(_ref3) {
    var paymentTerminalId = _ref3.paymentTerminalId,
        token = _ref3.token;

    return client.get("/payment-terminals/" + paymentTerminalId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        paymentTerminal = _ref4.paymentTerminal;

    return client({
      url: "/payment-terminals",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        paymentTerminal: paymentTerminal
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        paymentTerminalId = _ref5.paymentTerminalId,
        token = _ref5.token;

    return client({
      url: "/payment-terminals/" + paymentTerminalId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        paymentTerminalId = _ref6.paymentTerminalId,
        paymentTerminal = _ref6.paymentTerminal;

    return client({
      url: "/payment-terminals/" + paymentTerminalId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: {
        paymentTerminal: paymentTerminal
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = paymentTerminalFactory;