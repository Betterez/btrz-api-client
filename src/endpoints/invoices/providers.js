const {authorizationHeaders} = require("./../endpoints_helpers");

function providersFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}}) {
    return client({
      url: "/providers",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function get({token, jwtToken, id, query = {}}) {
    return client({
      url: `/providers/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function update({token, jwtToken, id, data, query = {}}) {
    return client({
      url: `/providers/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query,
      data
    });
  }

  function remove({token, jwtToken, id, query = {}}) {
    return client({
      url: `/providers/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function create({token, jwtToken, data, query = {}}) {
    return client({
      url: "/providers",
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

module.exports = providersFactory;
