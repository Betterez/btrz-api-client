const {authorizationHeaders} = require("./../endpoints_helpers");

function usersFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, id, headers} = {}) {
    return client({
      url: `/user/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/users",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    all
  };
}

module.exports = usersFactory;
