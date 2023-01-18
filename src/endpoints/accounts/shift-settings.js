const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function shiftSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, query, headers}) {
    return client({
      url: "/shift-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, shiftSettings, headers}) {
    return client({
      url: "/shift-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        shiftSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = shiftSettingsFactory;
