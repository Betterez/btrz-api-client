const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelZonesFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, query = {} }) {
    return client("/parcel-zones", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ token, parcelZone, jwtToken }) {
    return client({ 
      url: "/parcel-zones",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { parcelZone }
    });
  }

  function update({ jwtToken, token, parcelZoneId, parcelZone }) {
    return client({ 
      url: `/parcel-zone/${parcelZoneId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
