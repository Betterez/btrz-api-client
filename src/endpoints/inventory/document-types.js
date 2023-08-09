const {authorizationHeaders} = require("./../endpoints_helpers");

function documentTypesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: "/document-types",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query_
    });
  }

  function get({token, jwtToken, id, query = {}, headers, providerId}) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: `/document-types/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query_
    });
  }

  function update({token, jwtToken, id, data, query = {}, headers}) {
    return client({
      url: `/document-types/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  function remove({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/document-types/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/document-types",
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

module.exports = documentTypesFactory;
