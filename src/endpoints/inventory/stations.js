const { authorizationHeaders } = require("./../endpoints_helpers");

function stationsFactory({client}) {

  function get({ token, id }) {
    return client.get(`/station/${id}`, {
      headers: authorizationHeaders({token})
    });
  }

  function all({ token, query = {} }) {
    return client.get("/stations", {
      params: query,   
      headers: authorizationHeaders({token})
    });
  }

  return { 
    get,
    all
  };

}

module.exports = stationsFactory;