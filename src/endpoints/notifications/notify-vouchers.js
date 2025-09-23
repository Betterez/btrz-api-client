const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function notifyVoucherFactory({
  client, internalAuthTokenProvider
}) {
  return {
    create({token, jwtToken, query, data, headers}) {
      return client({
        url: "/notify-vouchers",
        method: "post",
        params: query,
        data,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
}

module.exports = notifyVoucherFactory;
