const { authorizationHeaders } = require("./../endpoints_helpers");

function manifestFactory({ client }) {

  function get({ token, jwtToken, query = {}}) {
    return client({
      url: "/manifest",
      method: "get",
      params: query,
      headers: authorizationHeaders({ token, jwtToken })
    });
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
    patch
  };
}

module.exports = manifestFactory;
