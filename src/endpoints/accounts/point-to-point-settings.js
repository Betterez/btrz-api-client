const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function pointToPointSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/point-to-point-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, pointToPointSettings, headers}) {
    return client({
      url: "/point-to-point-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: pointToPointSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = pointToPointSettingsFactory;
