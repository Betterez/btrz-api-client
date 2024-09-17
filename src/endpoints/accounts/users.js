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

  function update({token, jwtToken, userId, user, headers}) {
    return client({
      url: `/users/${userId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {user}
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
    },
    update({jwtToken, token, userId, sequenceId, sequence, headers}) {
      return client({
        url: `/users/${userId}/sequences/${sequenceId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: sequence
      });
    },
    transfer({jwtToken, token, userId, sequenceId, newUserId, headers}) {
      return client({
        url: `/users/${userId}/sequences/${sequenceId}`,
        method: "patch",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          operation: "transfer",
          newUserId
        }
      });
    }
  };

  return {
    get,
    all,
    create,
    update,
    sequences
  };
}

module.exports = usersFactory;
