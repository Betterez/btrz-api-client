const {authorizationHeaders} = require("./../endpoints_helpers");

function garagesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client.get("/garages", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({token, garageId, headers}) {
    return client.get(`/garages/${garageId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/garages",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  return {
    all,
    get,
    create
  };
}

module.exports = garagesFactory;
