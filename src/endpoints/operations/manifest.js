const { authorizationHeaders } = require("./../endpoints_helpers");

function manifestFactory({ client }) {

  function find({ token, jwtToken, query = {} }) {
    return client({
      url: "/manifests",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken })
    });
  }

  function get({ token, jwtToken, query = {} }) {
    return client({
      url: "/manifest",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken })
    });
  }

  function getById({ token, jwtToken, manifestId }) {
    return get({ token, jwtToken, query: { manifestId } });
  }

  function patch({ token, jwtToken, id, query = {}, operations }) {
    return client({
      url: `/manifest/${id}`,
      method: "patch",
      params: query,
      headers: authorizationHeaders({token, jwtToken}),
      data: { operations }
    });
  }

  return {
    find,
    get,
    getById,
    patch
  };
}

module.exports = manifestFactory;
