const {authorizationHeaders} = require("./../endpoints_helpers");

function travellerCardProvidersFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/traveller-card-providers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function create({token, jwtToken, travellerCardProvider, headers}) {
    return client({
      url: "/traveller-card-providers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardProvider}
    });
  }

  function update({jwtToken, token, travellerCardProviderId, travellerCardProvider, headers}) {
    return client({
      url: `/traveller-card-providers/${travellerCardProviderId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardProvider}
    });
  }

  function get({token, travellerCardProviderId, jwtToken, headers}) {
    return client({
      url: `/traveller-card-providers/${travellerCardProviderId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    create,
    update,
    get
  };
}

module.exports = travellerCardProvidersFactory;
