const { authorizationHeaders } = require("./../endpoints_helpers");

function faresFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {}, headers }) {
    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({ token, id, headers }) {
    return client.get(`/fare/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };

}

module.exports = faresFactory;
