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

  function addComment({token, jwtToken, headers, id, comment}) {
    return client({
      url: `/parcels/${id}/comments`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {comment}
    });
  }

  return {
    get,
    all,
    addScan,
    addComment
  };
}

module.exports = parcelFactory;
