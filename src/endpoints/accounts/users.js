const {authorizationHeaders} = require("./../endpoints_helpers");

function usersFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, id} = {}) {
    return client({
      url: `/user/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function all({token, jwtToken, query = {}}) {
    return client({
      url: "/users",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    get,
    all
  };
}

module.exports = usersFactory;
