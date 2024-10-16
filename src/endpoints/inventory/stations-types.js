const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function stationsTypesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client({
      url: "/stations/types",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = stationsTypesFactory;
