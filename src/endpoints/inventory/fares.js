const { authorizationHeaders } = require("./../endpoints_helpers");

function faresFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/fares", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all
  };

}

module.exports = faresFactory;