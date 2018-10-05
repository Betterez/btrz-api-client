const { authorizationHeaders } = require("./../endpoints_helpers");

function customersFactory({client, internalAuthTokenProvider}) {

  function put({ customerId, customer, token, jwtToken }) {
    return client({
      url: `/customers/${customerId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: customer
    });
  }

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: `/customers`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    put,
    all
  };
}

module.exports = customersFactory;
