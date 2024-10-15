const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function ticketMovementSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/ticket-movement-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, ticketMovementSettings, headers}) {
    return client({
      url: "/ticket-movement-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: ticketMovementSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = ticketMovementSettingsFactory;
