const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentProvidersFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/payment-providers", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all
  };

}

module.exports = paymentProvidersFactory;
