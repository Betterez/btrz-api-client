const {authorizationHeaders} = require("./../endpoints_helpers.js");

function mergedFareTablesFactory({client, internalAuthTokenProvider}) {
  function get({token, routeId, productId, headers}) {
    return client({
      url: `/coltrane/routes/${routeId}/merged-fare-tables/${productId}`,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = mergedFareTablesFactory;
