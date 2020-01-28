const { authorizationHeaders } = require("./../endpoints_helpers");

function routesFactory({ client, internalAuthTokenProvider }) {
  function get({ routeId, token, query = {} }) {
    return client({
      url: `/route/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function prices({ token, productId, originId, destinationId, channel, query }) {
    const params = Object.assign({}, query, {productId, originId, destinationId, channel});

    return client({
      url: "/routes/prices",
      params,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function all({token, query = {}}) {
    return client.get("/routes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get,
    prices,
    all
  };
}

module.exports = routesFactory;
