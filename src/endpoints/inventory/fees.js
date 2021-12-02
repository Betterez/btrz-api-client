const { authorizationHeaders } = require("./../endpoints_helpers");

function feesFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {}, headers }) {
    return client.get("/fees", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return { 
    all
  };

}

module.exports = feesFactory;