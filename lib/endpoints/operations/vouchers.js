"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function vouchersFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        headers = _ref2.headers,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        _ref2$voucher = _ref2.voucher,
        voucher = _ref2$voucher === undefined ? {} : _ref2$voucher,
        user = _ref2.user;

    return client({
      url: "/vouchers",
      method: "POST",
      params: query,
      data: { voucher: voucher, user: user },
      headers: authorizationHeaders({
        jwtToken: jwtToken,
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  return {
    create: create
  };
}

module.exports = vouchersFactory;