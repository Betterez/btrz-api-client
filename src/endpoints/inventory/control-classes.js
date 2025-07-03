const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function controlClassesFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/control-classes", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({controlClassId, token, headers, jwtToken}) {
    return client.get(`/control-classes/${controlClassId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, controlClass, headers}) {
    return client({
      url: "/control-classes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        controlClass
      }
    });
  }

  function remove({jwtToken, controlClassId, token, headers}) {
    return client({
      url: `/control-classes/${controlClassId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, controlClassId, controlClass, headers}) {
    return client({
      url: `/control-classes/${controlClassId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        controlClass
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

module.exports = controlClassesFactory;
