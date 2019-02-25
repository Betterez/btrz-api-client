const { authorizationHeaders } = require("./../endpoints_helpers");

function stationsZonesFactory({client, internalAuthTokenProvider}) {

  function get({ token, query = {} }) {
    return client.get("/stations/zones", {
      params : query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = stationsZonesFactory;
