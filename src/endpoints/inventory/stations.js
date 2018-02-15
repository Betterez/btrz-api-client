const { authorizationHeaders } = require("./../endpoints_helpers");

function stationsFactory({client, internalAuthTokenProvider}) {

  function get({ token, id }) {
    return client.get(`/station/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function all({ token, query = {} }) {
    return client.get("/stations", {
      params: query,   
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    get,
    all
  };

}

module.exports = stationsFactory;