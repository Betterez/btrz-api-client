const { authorizationHeaders } = require("./../endpoints_helpers");

function routesFactory({ client, internalAuthTokenProvider }) {
  
  function get({ routeId, token, query = {} }) {
    return client({
      url: `/route/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    get
  };

}

module.exports = routesFactory;