"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function terminalPaymentsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var mit = {
    update: function update(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          id = _ref2.id,
          terminalPayment = _ref2.terminalPayment,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/terminal-payments/mit/" + id,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: { terminalPayment: terminalPayment }
      });
    },
    get: function get(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          id = _ref3.id,
          _ref3$query = _ref3.query,
          query = _ref3$query === undefined ? {} : _ref3$query,
          headers = _ref3.headers;

      return client.get("/terminal-payments/mit/" + id, {
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    mit: mit
  };
}

module.exports = terminalPaymentsFactory;