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

  function compensationsCreate({token, jwtToken, compensation, query = {}, headers}) {
    return client({
      url: "/vouchers/compensations",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: compensation
    });
  }

  return {
    create,
    compensations: {
      create: compensationsCreate
    }
  };
}

module.exports = vouchersFactory;
