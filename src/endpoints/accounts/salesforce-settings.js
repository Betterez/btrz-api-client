const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function salesforceSettingsFactory({client, internalAuthTokenProvider}) {
  function get({jwtToken, token, query, headers}) {
    return client({
      url: "/salesforce-settings",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, salesforceSettings, headers}) {
    return client({
      url: "/salesforce-settings",
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        salesforceSettings
      }
    });
  }

  return {
    get,
    update
  };
}

module.exports = salesforceSettingsFactory;
