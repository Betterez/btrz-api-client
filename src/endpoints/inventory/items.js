const { authorizationHeaders } = require("./../endpoints_helpers");

function itemsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, query = {} }) {
    return client({
      url: "/items",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all 
  };

}

module.exports = itemsFactory;