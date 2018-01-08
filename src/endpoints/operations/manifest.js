const { authorizationHeaders } = require("./../endpoints_helpers");

function manifestFactory({ client }) {

  function get({ token, jwtToken, query = {} }) {
    return client({
      url: "/manifest",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken })
    });
  }

  function getOne({ token, jwtToken, query = {} }) {
    return get({ token, jwtToken, query: Object.assign({returnSingleElement: true}, query) });
  }

  function getById({ token, jwtToken, manifestId }) {
    return getOne({ token, jwtToken, query: { manifestId } });
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
    get,
    getOne,
    getById,
    patch
  };
}

module.exports = manifestFactory;
