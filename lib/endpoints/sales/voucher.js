"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function voucherFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        voucher = _ref2.voucher,
        headers = _ref2.headers;

    return client({
      // eslint-disable-next-line max-len
      url: "/vouchers/" + voucher.number + "?cartId=" + voucher.cartId + "&firstName=" + voucher.firstName + "&lastName=" + voucher.lastName + "&displayCurrencyCode=" + (voucher.displayCurrencyCode || ""),
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get
  };
}

module.exports = voucherFactory;