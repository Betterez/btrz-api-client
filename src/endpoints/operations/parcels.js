const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, id, headers }) {
    return client({
      url: `/parcels/${id}`,
      headers: authorizationHeaders({ token , jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function all({ token, jwtToken, query = {}, headers }) {
    return client({
      url: "/parcels",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function addScan({ token, jwtToken, id, operationType, locationData, headers }) {
    return client({
      url: `/parcels/${id}/scans`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { operationType, locationData }
    });
  }

  return { 
    get,
    all,
    addScan
  };
}

module.exports = parcelFactory;
