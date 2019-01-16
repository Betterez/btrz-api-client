const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentsFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, payments }) {
    return client({
      url: "/payments",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { payments }
    });
  }

  return {
    create
  };
}

module.exports = paymentsFactory;
