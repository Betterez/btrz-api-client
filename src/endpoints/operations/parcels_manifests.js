const {authorizationHeaders} = require("./../endpoints_helpers.js");

function parcelsManifestsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/parcels-manifests",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/parcels-manifests/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  // function update({token, jwtToken, id, data, headers, query}) {
  //   return client({
  //     url: `/passenger-check-in-info/${id}`,
  //     method: "put",
  //     params: query,
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
  //     data
  //   });
  // }

  // function remove({token, jwtToken, manifestId, parcelId, headers}) {
  //   return client({
  //     url: `/parcels-manifests/${manifestId}`,
  //     method: "delete",
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
  //   });
  // }

  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/parcels-manifests",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  const parcels = {
    remove({token, jwtToken, manifestId, parcelId, headers}) {
      return client({
        url: `/parcels-manifests/${manifestId}/parcels/${parcelId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({token, jwtToken, manifestId, query = {}, data, headers}) {
      return client({
        url: `/parcels-manifests/${manifestId}/parcels`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data
      });
    }
  };

  return {
    all,
    get,
    // update,
    // remove,
    create,
    parcels
  };
}

module.exports = parcelsManifestsFactory;
