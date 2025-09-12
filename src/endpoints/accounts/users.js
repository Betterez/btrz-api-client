const {authorizationHeaders} = require("./../endpoints_helpers.js");

function usersFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, id, headers} = {}) {
    return client({
      url: `/user/${id}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function getV2({token, jwtToken, id, headers} = {}) {
    return client({
      url: `/users/${id}`,
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

  function login({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/users",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  // Deprecated. Use login instead.
  function create({token, jwtToken, query = {}, data, headers}) {
    return login({token, jwtToken, query, data, headers});
  }

  function update({token, jwtToken, userId, user, headers}) {
    return client({
      url: `/users/${userId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {user}
    });
  }

  function createOrUpdateMany({token, jwtToken, users, headers}) {
    return client({
      url: "/users/import",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {users}
    });
  }

  function impersonate({token, jwtToken, offlineUserId, headers}) {
    return client({
      url: "/users/impersonate",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {offlineUserId}
    });
  }

  function delegation({token, jwtToken, actionName, delegator, headers}) {
    return client({
      url: "/users/delegation",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {actionName, delegator}
    });
  }

  function revokeDelegation({token, jwtToken, actionName, headers}) {
    return client({
      url: "/users/delegation",
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {actionName}
    });
  }

  const sequences = {
    get({token, jwtToken, userId, sequenceId, headers}) {
      return client({
        url: `/users/${userId}/sequences/${sequenceId}`,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    all({token, jwtToken, userId, query = {}, headers}) {
      return client({
        url: `/users/${userId}/sequences`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
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
    getV2,
    all,
    create,
    login,
    update,
    createOrUpdateMany,
    impersonate,
    delegation,
    revokeDelegation,
    sequences
  };
}

module.exports = usersFactory;
