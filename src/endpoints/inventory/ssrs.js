const { authorizationHeaders } = require("./../endpoints_helpers");

function ssrsFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/ssrs", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    all
  };

}

module.exports = ssrsFactory;