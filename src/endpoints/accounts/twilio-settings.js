const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function twilioSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, query, headers}) {
    return client({
      url: "/twilio-settings",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, twilioSettings, headers}) {
    return client({
      url: "/twilio-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        twilioSettings
      }
    });
  }

  return {
    all,
    update
  };
}

module.exports = twilioSettingsFactory;
