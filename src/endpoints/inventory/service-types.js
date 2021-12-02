const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function serviceTypesFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/service-types", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({serviceTypeId, token, headers}) {
    return client.get(`/service-types/${serviceTypeId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, serviceType, headers}) {
    return client({
      url: "/service-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceType
      }
    });
  }

  function remove({ jwtToken, serviceTypeId, token, headers }) {
    return client({
      url: `/service-types/${serviceTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, serviceTypeId, serviceType, headers}) {
    return client({
      url: `/service-types/${serviceTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        serviceType
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = serviceTypesFactory;
