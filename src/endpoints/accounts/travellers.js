const {authorizationHeaders} = require("./../endpoints_helpers");

function travellersFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query}) {
    return client({
      url: "/travellers",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function get({token, jwtToken, id, query = {}}) {
    return client({
      url: `/travellers/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function update({token, jwtToken, id, data, query = {}}) {
    return client({
      url: `/travellers/${id}`,
      method: "put",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function remove({token, jwtToken, id, query = {}}) {
    return client({
      url: `/travellers/${id}`,
      method: "delete",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({token, jwtToken, query = {}, data}) {
    return client({
      url: "/travellers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = travellersFactory;
