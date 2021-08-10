const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function printSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, query}) {
    return client({
      url: "/print-settings",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function update({jwtToken, token, printSettings}) {
    return client({
      url: "/print-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider
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
