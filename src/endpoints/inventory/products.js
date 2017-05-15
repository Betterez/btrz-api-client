const { authorizationHeaders } = require("./../endpoints_helpers");

function productsFactory({ client }) {
  
  function all({ token, query = {} }) {
    return client({
      url: "/products",
      params: query,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all 
  };

}

module.exports = productsFactory;