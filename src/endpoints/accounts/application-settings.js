const {authorizationHeaders} = require("./../endpoints_helpers");

function applicationSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, providerId, jwtToken, query = {}}) {
    return client.get(`/application-settings/${providerId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  return {
    get
  };
}

module.exports = applicationSettingsFactory;
