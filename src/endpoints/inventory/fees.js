const { authorizationHeaders } = require("./../endpoints_helpers");

function feesFactory({client}) {

  function all({ token, query = {} }) {
    return client.get("/fees", {
      params: query,   
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all
  };

}

module.exports = feesFactory;