const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function voucherFactory({
  client, internalAuthTokenProvider
}) {
  function get({
    token, voucher, headers
  }) {
    return client({
      // eslint-disable-next-line max-len
      url: `/vouchers/${voucher.number}?cartId=${voucher.cartId}&firstName=${voucher.firstName}&lastName=${voucher.lastName}&displayCurrencyCode=${voucher.displayCurrencyCode || ""}`,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = voucherFactory;
