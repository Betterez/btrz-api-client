const { authorizationHeaders } = require("./../endpoints_helpers");

function itemsFactory({ client }) {
  
  function all({ token, query = {} }) {
    return client({
      url: "/items",
      params: query,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all 
  };

}

module.exports = itemsFactory;