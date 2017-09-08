const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function voucherFactory({ client }) {

  function get({ token, voucher }) {
    return client({      
      url: `/vouchers/${voucher.number}?cartId=${voucher.cartId}&firstName=${voucher.firstName}&lastName=${voucher.lastName}`,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    get
  };
}

module.exports = voucherFactory;
