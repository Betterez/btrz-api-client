const {authorizationHeaders} = require("./../endpoints_helpers.js");

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

  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/users",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  const sequences = {
    create({jwtToken, token, userId, sequence, headers}) {
      return client({
        url: `/users/${userId}/sequences`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: sequence
      });
    }
  };

  return {
    get,
    all,
    create,
    sequences
  };
}

module.exports = usersFactory;
