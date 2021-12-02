const { authorizationHeaders } = require("./../endpoints_helpers");

function itemsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, query = {}, headers }) {
    return client({
      url: "/items",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return { 
    all 
  };

}

module.exports = itemsFactory;