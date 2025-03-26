const {authorizationHeaders} = require("./../endpoints_helpers");

function routesFactory({client, internalAuthTokenProvider}) {
  function get({routeId, token, query = {}, headers}) {
    return client({
      url: `/route/${routeId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function prices({token, productId, originId, destinationId, channel, query, headers}) {
    const params = Object.assign({}, query, {productId, originId, destinationId, channel});

    return client({
      url: "/routes/prices",
      params,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function all({token, query = {}, headers}) {
    return client.get("/routes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function stations({token, routeId, headers}) {
    return client({
      url: `/routes/${routeId}/stations`,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/routes",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }

  function update({token, jwtToken, data, routeId, headers}) {
    return client({
      url: `/routes/${routeId}`,
      method: "put",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data
    });
  }


  const fareTables = {
    all({
      token, query = {}, headers
    }) {
      return client({
        url: "/routes/fare-tables",
        params: query,
        headers: authorizationHeaders({
          token, internalAuthTokenProvider, headers
        })
      });
    },
    create({
      token, jwtToken, routeId, fareTable, headers
    }) {
      return client({
        url: `/routes/${routeId}/fare-tables`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareTable
        }
      });
    },
    update({
      token, jwtToken, routeId, fareTableId, fareTable, headers
    }) {
      return client({
        url: `/routes/${routeId}/fare-tables/${fareTableId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareTable
        }
      });
    }
  };
  const stops = {
    create({token, jwtToken, routeId, stop, headers}) {
      return client({
        url: `/routes/${routeId}/stops`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: stop
      });
    }
  };

  return {
    get,
    prices,
    all,
    stations,
    create,
    update,
    fareTables,
    stops
  };
}

module.exports = routesFactory;
