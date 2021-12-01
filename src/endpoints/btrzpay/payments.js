const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentsFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, payments, headers }) {
    return client({
      url: "/payments",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { payments }
    });
  }

  function get({ token, jwtToken, transactionId, headers }) {
    return client.get(`/transactions/${transactionId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create,
    get
  };
}

module.exports = paymentsFactory;
