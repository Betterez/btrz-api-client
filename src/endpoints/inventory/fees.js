const { authorizationHeaders } = require("./../endpoints_helpers");

function feesFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/fees", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all
  };

}

module.exports = feesFactory;