const { authorizationHeaders } = require("./../endpoints_helpers");

function faresFactory({client}) {

  function all({ token, query = {} }) {
    return client.get("/fares", {
      params: query,   
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all
  };

}

module.exports = faresFactory;