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

  const vehicles = {
    createOrUpdate({token, jwtToken, manifestId, query = {}, data, headers}) {
      return client({
        url: `/parcels-manifests/${manifestId}/vehicles`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {
          parcelManifestVehicle: data
        }
      });
    }
  };

  return {
    all,
    get,
    create,
    parcels,
    vehicles
  };
}

module.exports = parcelsManifestsFactory;
