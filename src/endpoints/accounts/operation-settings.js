const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function operationSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, query, headers}) {
    return client({
      url: "/operation-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, operationSettings, headers}) {
    return client({
      url: "/operation-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        operationSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = operationSettingsFactory;
