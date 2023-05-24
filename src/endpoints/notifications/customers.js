const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function customersFactory({
  client, internalAuthTokenProvider
}) {
  function sendResetPasswordEmail({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/customers/reset",
      method: "post",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function sendActivationEmail({
    token, query = {}, data, headers
  }) {
    return client({
      url: "/customers/activation",
      method: "post",
      params: query,
      data,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    sendResetPasswordEmail,
    sendActivationEmail
  };
}

module.exports = customersFactory;
