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

  function getOrCreate({ token, jwtToken, query }) {
    return get({ token, jwtToken, query: Object.assign({createIfNotExists: true}, query) });
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

  function update({ token, jwtToken, data }) {
    return patch({ token, jwtToken, id: data.manifestId, query: {}, operations: [
      {op: "update", data}
    ] });
  }

  function create({ token, jwtToken, data }) {
    return client({
      url: "/manifest",
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data
    });
  }

  return {
    find,
    get,
    getById,
    getOrCreate,
    patch,
    update,
    create
  };
}

module.exports = manifestFactory;
