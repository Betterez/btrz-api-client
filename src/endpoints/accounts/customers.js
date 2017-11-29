const { authorizationHeaders } = require("./../endpoints_helpers");

function customersFactory({client}) {

  function put({ customerId, customer, token, jwtToken }) {
    return client({ 
      url: `/customers/${customerId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken}),
      data: customer
    });
  }

  return {
    put
  };
}

module.exports = customersFactory;
