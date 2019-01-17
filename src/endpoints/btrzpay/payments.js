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

  function get({ token, jwtToken, transactionId }) {
    return client.get(`/transactions/${transactionId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    create,
    get
  };
}

module.exports = paymentsFactory;
