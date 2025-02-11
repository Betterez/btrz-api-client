const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function goalSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, query, headers}) {
    return client({
      url: "/goal-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, goalSettings, headers}) {
    return client({
      url: "/goal-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        goalSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = goalSettingsFactory;
