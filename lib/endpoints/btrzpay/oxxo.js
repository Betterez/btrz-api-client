"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function oxxoFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var token = {
    get: function get(_ref2) {
      var jwtToken = _ref2.jwtToken,
          headers = _ref2.headers,
          internalAuthTokenProvider = _ref2.internalAuthTokenProvider;

      return client({
        url: "/oxxo/token",
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var payments = {
    all: function all(_ref3) {
      var jwtToken = _ref3.jwtToken,
          headers = _ref3.headers,
          oxxoToken = _ref3.oxxoToken,
          query = _ref3.query,
          internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

      return client({
        url: "/oxxo/" + oxxoToken + "/payments",
        params: query,
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    update: function update(_ref4) {
      var jwtToken = _ref4.jwtToken,
          headers = _ref4.headers,
          oxxoToken = _ref4.oxxoToken,
          query = _ref4.query,
          referenceNumber = _ref4.referenceNumber,
          data = _ref4.data,
          internalAuthTokenProvider = _ref4.internalAuthTokenProvider;

      return client({
        url: "/oxxo/" + oxxoToken + "/payments/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    token: token,
    payments: payments
  };
}

module.exports = oxxoFactory;