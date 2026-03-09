const {authorizationHeaders} = require("../endpoints_helpers.js");

function cancellationSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/cancellation-settings",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, data, headers}) {
    return client({
      url: "/cancellation-settings",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    get,
    update
  };
}

module.exports = cancellationSettingsFactory;
