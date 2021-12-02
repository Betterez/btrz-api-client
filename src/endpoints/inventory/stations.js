const {authorizationHeaders} = require("./../endpoints_helpers");

function stationsFactory({client, internalAuthTokenProvider}) {
  function get({token, id, headers}) {
    return client.get(`/stations/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function all({token, query = {}, headers}) {
    return client.get("/stations", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    all
  };
}

module.exports = stationsFactory;
