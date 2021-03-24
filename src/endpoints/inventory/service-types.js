const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function serviceTypesFactory({client, internalAuthTokenProvider}) {

  function all({
    token,
    query = {}
  }) {
    return client.get("/service-types", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({serviceTypeId, token}) {
    return client.get(`/service-types/${serviceTypeId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({jwtToken, token, serviceType}) {
    return client({
      url: "/service-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {
        serviceType
      }
    });
  }

  function remove({ jwtToken, serviceTypeId, token }) {
    return client({
      url: `/service-types/${serviceTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, serviceTypeId, serviceType}) {
    return client({
      url: `/service-types/${serviceTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
