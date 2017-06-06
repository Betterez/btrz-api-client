const { authorizationHeaders } = require("./../endpoints_helpers");

function promosFactory({client}) {

  function all({ token, query = {} }) {
    return client.get("/promos", {
      params: query,   
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all
  };

}

module.exports = promosFactory;