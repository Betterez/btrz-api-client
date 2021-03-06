const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, providerId, jwtToken, query = {}}) {
    return client.get(`/application-settings/${providerId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function update({jwtToken, token, id, application}) {
    return client({
      url: `/application-settings/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {application}
    });
  }

  function remove({jwtToken, token, id}) {
    return client({
      url: `/application-settings/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function regenerateKeys({jwtToken, token, id}) {
    return client({
      url: `/application-settings/${id}/keys`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({jwtToken, token, application}) {
    return client({
      url: "/application-settings",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
