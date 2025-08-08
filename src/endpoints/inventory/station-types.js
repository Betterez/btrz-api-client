const {authorizationHeaders} = require("./../endpoints_helpers.js");

function stationTypeFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/station-types",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, stationTypeId, query = {}, headers}) {
    return client({
      url: `/station-types/${stationTypeId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function update({token, jwtToken, stationTypeId, data, headers}) {
    return client({
      url: `/station-types/${stationTypeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({token, jwtToken, stationTypeId, headers}) {
    return client({
      url: `/station-types/${stationTypeId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/station-types",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = stationTypeFactory;
