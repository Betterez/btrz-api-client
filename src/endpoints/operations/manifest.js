const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function manifestFactory({
  client, internalAuthTokenProvider
}) {
  function get({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function getById({
    token, jwtToken, manifestId, headers
  }) {
    return client({
      url: `/manifests/${manifestId}`,
      method: "get",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  function getAll({token, jwtToken, providerId, data, headers}) {
    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/all-manifests",
      method: "post",
      params: {providerId},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function outlook({
    token, jwtToken, query = {}, headers
  }) {
    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  function patch({
    token, jwtToken, query = {}, operations, headers
  }) {
    return client({
      url: "/manifests",
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        operations
      }
    });
  }

  function save({
    token, jwtToken, providerId, data, headers
  }) {
    return client({
      url: "/manifests",
      method: "put",
      params: {providerId, manifestId: data.manifestId},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function addUser({
    token, jwtToken, manifestId, query = {}, data, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/users`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  function removeUser({
    token, jwtToken, manifestId, userId, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/users/${userId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  function addCapacityException({
    token, jwtToken, manifestId, query = {}, data, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/capacity-exceptions`,
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }


  function removeCapacityException({
    token, jwtToken, manifestId, exceptionId, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/capacity-exceptions/${exceptionId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  function updateComment({
    token, jwtToken, manifestId, query = {}, data, headers
  }) {
    return client({
      url: `/manifests/${manifestId}/comments`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query,
      data
    });
  }

  const checkIn = {
    create({token, jwtToken, query = {}, headers, data, manifestId, legFromId}) {
      return client({
        url: `/manifests/${manifestId}/checkin/${legFromId}`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query,
        data
      });
    }
  };

  return {
    get,
    getAll,
    getById,
    outlook,
    patch,
    save,
    addUser,
    removeUser,
    updateComment,
    addCapacityException,
    removeCapacityException,
    checkIn
  };
}

module.exports = manifestFactory;
