"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function datalogicFactory(_ref) {
  var client = _ref.client;

  var payments = {
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          headers = _ref2.headers,
          query = _ref2.query,
          internalAuthTokenProvider = _ref2.internalAuthTokenProvider;

      return client({
        url: "/datalogic/payments",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    update: function update(_ref3) {
      var token = _ref3.token,
          jwtToken = _ref3.jwtToken,
          headers = _ref3.headers,
          query = _ref3.query,
          referenceNumber = _ref3.referenceNumber,
          data = _ref3.data,
          internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

      return client({
        url: "/datalogic/payments/" + referenceNumber,
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var referenceNumber = {
    get: function get(_ref4) {
      var token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          headers = _ref4.headers,
          internalAuthTokenProvider = _ref4.internalAuthTokenProvider;

      return client({
        url: "/datalogic/reference-number",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var authCode = {
    get: function get(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          headers = _ref5.headers,
          internalAuthTokenProvider = _ref5.internalAuthTokenProvider;

      return client({
        url: "/datalogic/auth-code",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    payments: payments,
    referenceNumber: referenceNumber,
    authCode: authCode
  };
}

module.exports = datalogicFactory;