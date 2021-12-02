const {authorizationHeaders} = require("./../endpoints_helpers");

function travellerCardTypesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/traveller-card-types",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, travellerCardType, headers}) {
    return client({
      url: "/traveller-card-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardType}
    });
  }

  function update({jwtToken, token, travellerCardTypeId, travellerCardType, headers}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {travellerCardType}
    });
  }

  function get({token, travellerCardTypeId, jwtToken, headers}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  function remove({token, travellerCardTypeId, jwtToken, headers}) {
    return client({
      url: `/traveller-card-types/${travellerCardTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
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
