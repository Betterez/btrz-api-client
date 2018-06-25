const { authorizationHeaders } = require("./../endpoints_helpers");

function faresFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({ token, id }) {
    return client.get(`/fare/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all,
    get
  };

}

module.exports = faresFactory;
