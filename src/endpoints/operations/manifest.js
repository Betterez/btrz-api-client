const { authorizationHeaders } = require("./../endpoints_helpers");

function manifestFactory({ client, internalAuthTokenProvider }) {

  function find({ token, jwtToken, query = {} }) {
    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function get({ token, jwtToken, query = {} }) {
    return client({
      url: "/manifest",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken, internalAuthTokenProvider })
    });
  }

  function getById({ token, jwtToken, manifestId }) {
    return get({ token, jwtToken, query: { manifestId } });
  }

  function getOrCreate({ token, jwtToken, query }) {
    return get({ token, jwtToken, query: Object.assign({createIfNotExists: true}, query) });
  }

  function patch({ token, jwtToken, id, query = {}, operations }) {
    return client({
      url: `/manifests/${id}`,
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
    find,
    get,
    getById,
    getOrCreate,
    patch,
    save
  };
}

module.exports = manifestFactory;
