"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function notifyVoucherFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  return {
    create: function create(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          query = _ref2.query,
          data = _ref2.data,
          headers = _ref2.headers;

      return client({
        url: "/notify-vouchers",
        method: "post",
        params: query,
        data: data,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };
}

module.exports = notifyVoucherFactory;