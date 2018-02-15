const { authorizationHeaders } = require("./../endpoints_helpers");

function promosFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/promos", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all
  };

}

module.exports = promosFactory;