"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function voucherFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        voucher = _ref2.voucher;

    return client({
      url: "/vouchers/" + voucher.number + "?cartId=" + voucher.cartId + "&firstName=" + voucher.firstName + "&lastName=" + voucher.lastName,
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    get: get
  };
}

module.exports = voucherFactory;