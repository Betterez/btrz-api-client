const { authorizationHeaders } = require("./../endpoints_helpers");

function manifestFactory({ client, internalAuthTokenProvider }) {

  function get({token, jwtToken, query = {}}) {
    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function getById({ token, jwtToken, manifestId }) {
    return client({
      url: `/manifests/${manifestId}`,
      method: "get",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function getAll({token, jwtToken, providerId, data}) {
    // an HTTP POST request is used to send the query data in the request body because the query may be very large.
    return client({
      url: "/all-manifests",
      method: "post",
      params: {providerId},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function outlook({ token, jwtToken, query = {} }) {
    return client({
      url: "/outlook-manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function patch({ token, jwtToken, query = {}, operations }) {
    return client({
      url: "/manifests",
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { operations }
    });
  }

  function save({ token, jwtToken, providerId, data }) {
    return client({
      url: `/manifests`,
      method: "put",
      params: {providerId, manifestId: data.manifestId},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function addUser({ token, jwtToken, manifestId, query = {}, data }) {  
    return client({
      url: `/manifests/${manifestId}/users`,
      method: "post",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider }),
      params: query,
      data
    });
  }

  function removeUser({ token, jwtToken, manifestId, userId }) {
    return client({
      url: `/manifests/${manifestId}/users/${userId}`,
      method: "delete",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  return {
    get,
    getAll,
    getById,
    outlook,
    patch,
    save,
    addUser,
    removeUser
  };
}

module.exports = manifestFactory;
