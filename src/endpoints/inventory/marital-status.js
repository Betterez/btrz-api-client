const {authorizationHeaders} = require("./../endpoints_helpers");

function maritalStatusFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/marital-status",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/marital-status/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function update({token, jwtToken, id, data, query = {}, headers}) {
    return client({
      url: `/marital-status/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  function remove({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/marital-status/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/marital-status",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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

module.exports = maritalStatusFactory;
