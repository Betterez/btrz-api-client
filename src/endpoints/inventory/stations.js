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

  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/stations",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        station: data
      }
    });
  }

  return {
    get,
    all,
    create
  };
}

module.exports = stationsFactory;
