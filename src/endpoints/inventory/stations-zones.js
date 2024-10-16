const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function stationsZonesFactory({client, internalAuthTokenProvider}) {
  function get({token, query = {}, headers}) {
    return client.get("/stations/zones", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = stationsZonesFactory;
