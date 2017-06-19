const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentProvidersFactory({client}) {

  function all({ token, query = {} }) {
    return client.get("/payment-providers", {
      params: query,   
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all
  };

}

module.exports = paymentProvidersFactory;
