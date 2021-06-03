const {authorizationHeaders} = require("./../endpoints_helpers");

function travellerCardTypesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}}) {
    return client({
      url: "/traveller-card-types",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({token, jwtToken, travellerCardType}) {
    return client({
      url: "/traveller-card-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {travellerCardType}
    });
  }

  function update({jwtToken, token, travellerCardTypeId, travellerCardType}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {travellerCardType}
    });
  }

  function get({token, travellerCardTypeId, jwtToken}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken})
    });
  }

  function remove({token, travellerCardTypeId, jwtToken}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken})
    });
  }

  return {
    all,
    create,
    update,
    get,
    remove
  };
}

module.exports = travellerCardTypesFactory;
