const { authorizationHeaders } = require("./../endpoints_helpers");

function ssrsFactory({client}) {

  function all({ token, query = {} }) {
    return client.get("/ssrs", {
      params: query,   
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all
  };

}

module.exports = ssrsFactory;