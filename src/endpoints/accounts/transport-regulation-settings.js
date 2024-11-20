const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function transportRegulationSettingsForCNRT({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/transport-regulation-settings/cnrt",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, transportRegulationSettings, headers}) {
    return client({
      url: "/transport-regulation-settings/cnrt",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: transportRegulationSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = transportRegulationSettingsForCNRT;
