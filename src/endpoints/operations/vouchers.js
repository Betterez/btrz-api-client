const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function vouchersFactory({
  client, internalAuthTokenProvider
}) {
  function create({
    jwtToken, token, headers, query = {}, voucher = {}
  }) {
    return client({
      url: "/vouchers",
      method: "POST",
      params: query,
      data: voucher,
      headers: authorizationHeaders({
        jwtToken,
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    create
  };
}

module.exports = vouchersFactory;
