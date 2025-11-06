const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function multiproductSalesSettingsFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, headers}) {
    return client({
      url: "/multiproduct-sales-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, data, headers}) {
    return client({
      url: "/multiproduct-sales-settings",
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

module.exports = multiproductSalesSettingsFactory;
