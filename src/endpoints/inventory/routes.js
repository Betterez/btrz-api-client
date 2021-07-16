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

  function stations({token, routeId}) {
    return client({
      url: `/routes/${routeId}/stations`,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  const fareTables = {
    all({
      token, query = {}
    }) {
      return client({
        url: "/routes/fare-tables",
        params: query,
        headers: authorizationHeaders({
          token, internalAuthTokenProvider
        })
      });
    },
    update({
      token, jwtToken, routeId, fareTableId, fareTable
    }) {
      return client({
        url: `/routes/${routeId}/fare-tables/${fareTableId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider
        }),
        data: {
          fareTable
        }
      });
    }
  };

  return {
    get,
    prices,
    all,
    stations,
    fareTables
  };
}

module.exports = routesFactory;
