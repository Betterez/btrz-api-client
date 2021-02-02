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

  return {
    get,
    update,
    remove
  };
}

module.exports = applicationSettingsFactory;
