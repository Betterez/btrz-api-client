const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelZonesFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, query = {}, headers }) {
    return client("/parcel-zones", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, parcelZone, jwtToken, headers }) {
    return client({ 
      url: "/parcel-zones",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { parcelZone }
    });
  }

  function update({ jwtToken, token, parcelZoneId, parcelZone, headers }) {
    return client({ 
      url: `/parcel-zone/${parcelZoneId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { parcelZone }
    });
  }

  return { 
    all,
    create,
    update
  };
}

module.exports = parcelZonesFactory;
