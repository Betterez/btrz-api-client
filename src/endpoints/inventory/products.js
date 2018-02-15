const { authorizationHeaders } = require("./../endpoints_helpers");

function productsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, query = {} }) {
    return client({
      url: "/products",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all 
  };

}

module.exports = productsFactory;