const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelFactory({ client, internalAuthTokenProvider }) {

  function get({ token, jwtToken, id, headers }) {
    return client({
      url: `/parcels/${id}`,
      headers: authorizationHeaders({ token , jwtToken, internalAuthTokenProvider, headers })
    });
  }

  function all({ token, jwtToken, query = {}, headers, providerId }) {
    const query_ = providerId ? {...query, providerId} : query;
    return client({
      url: "/parcels",
      params: query_,
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
      url: `/parcels/${id}/user-comments`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {comment}
    });
  }

  function deleteComment({token, jwtToken, headers, id, commentId}) {
    return client({
      url: `/parcels/${id}/user-comments/${commentId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    get,
    all,
    addScan,
    addComment,
    deleteComment
  };
}

module.exports = parcelFactory;
