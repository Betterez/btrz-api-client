const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function journeyPricesSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/journey-prices-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, journeyPricesSettings, headers}) {
    return client({
      url: "/journey-prices-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: journeyPricesSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = journeyPricesSettingsFactory;
