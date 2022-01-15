const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function printSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, query, headers}) {
    return client({
      url: "/print-settings",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, printSettings, headers}) {
    return client({
      url: "/print-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        printSettings
      }
    });
  }

  return {
    all,
    update
  };
}

module.exports = printSettingsFactory;
