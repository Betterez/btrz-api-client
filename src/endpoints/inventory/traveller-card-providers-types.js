const {authorizationHeaders} = require("./../endpoints_helpers");

function travellerCardProvidersTypesFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client.get("/traveller-card-providers/types", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = travellerCardProvidersTypesFactory;
