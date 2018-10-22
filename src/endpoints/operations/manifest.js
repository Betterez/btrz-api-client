const { authorizationHeaders } = require("./../endpoints_helpers");

function manifestFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, query = {} }) {
    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function getById({ token, jwtToken, manifestId }) {
    return client({
      url: `/manifests/${manifestId}`,
      method: "get",
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
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

  return {
    get,
    getById,
    outlook,
    patch,
    save
  };
}

module.exports = manifestFactory;
