const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function travelRoutesFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/travel-routes", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({travelRouteId, jwtToken, token, headers}) {
    return client.get(`/travel-routes/${travelRouteId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, travelRoute, headers}) {
    return client({
      url: "/travel-routes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        travelRoute
      }
    });
  }

  function update({jwtToken, token, travelRouteId, travelRoute, headers}) {
    return client({
      url: `/travel-routes/${travelRouteId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        travelRoute
      }
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = travelRoutesFactory;
