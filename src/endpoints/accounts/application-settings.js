const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, providerId, jwtToken, query = {}, headers}) {
    return client.get(`/application-settings/${providerId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function update({jwtToken, token, id, application, headers}) {
    return client({
      url: `/application-settings/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {application}
    });
  }

  function remove({jwtToken, token, id, headers}) {
    return client({
      url: `/application-settings/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function regenerateKeys({jwtToken, token, id, headers}) {
    return client({
      url: `/application-settings/${id}/keys`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, application, headers}) {
    return client({
      url: "/application-settings",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {application}
    });
  }

  return {
    get,
    update,
    remove,
    regenerateKeys,
    create
  };
}

module.exports = applicationSettingsFactory;
