const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function marketPricingSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/market-pricing-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, marketPricingSettings, headers}) {
    return client({
      url: "/market-pricing-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: marketPricingSettings
    });
  }

  return {
    get,
    update
  };
}

module.exports = marketPricingSettingsFactory;
