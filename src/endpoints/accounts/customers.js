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

  return {
    put
  };
}

module.exports = customersFactory;
