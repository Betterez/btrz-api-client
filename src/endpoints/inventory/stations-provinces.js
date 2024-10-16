const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function stationsProvincesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client({
      url: "/stations/provinces",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = stationsProvincesFactory;
