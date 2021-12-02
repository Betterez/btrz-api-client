const { authorizationHeaders } = require("./../endpoints_helpers");

function ssrsFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {}, headers }) {
    return client.get("/ssrs", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return { 
    all
  };

}

module.exports = ssrsFactory;