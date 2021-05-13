const {authorizationHeaders} = require("./../endpoints_helpers");

function travellerCardProvidersFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}}) {
    return client({
      url: "/traveller-card-providers",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  function create({token, jwtToken, travellerCardProvider}) {
    return client({
      url: "/traveller-card-providers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {travellerCardProvider}
    });
  }

  function update({jwtToken, token, travellerCardProviderId, travellerCardProvider}) {
    return client({
      url: `/traveller-card-providers/${travellerCardProviderId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {travellerCardProvider}
    });
  }

  function get({token, travellerCardProviderId, jwtToken}) {
    return client({
      url: `/traveller-card-providers/${travellerCardProviderId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken})
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
