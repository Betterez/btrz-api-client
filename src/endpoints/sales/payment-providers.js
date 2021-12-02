const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentProvidersFactory({client, internalAuthTokenProvider}) {

  function all({ token, jwtToken, query = {}, headers }) {
    return client.get("/payment-providers", {
      params: query,   
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return { 
    all
  };

}

module.exports = paymentProvidersFactory;
