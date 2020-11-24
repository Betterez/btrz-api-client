const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function customersFactory({
  client, internalAuthTokenProvider
}) {
  function sendResetPasswordEmail({
    token, jwtToken, query = {}
  }) {
    return client({
      url: "/customers/reset",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    sendResetPasswordEmail
  };
}

module.exports = customersFactory;
