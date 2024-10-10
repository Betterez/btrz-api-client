const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function revenueManagementSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/rms-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, revenueManagementSettings, headers}) {
    return client({
      url: "/rms-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: revenueManagementSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = revenueManagementSettingsFactory;
