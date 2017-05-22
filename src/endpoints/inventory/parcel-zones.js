const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelZonesFactory({ client }) {
  
  function all({ token }) {
    return client("/parcel-zones", {
      headers: authorizationHeaders({token})
    });
  }

  function create({ token, parcelZone, jwtToken }) {
    return client({ 
      url: "/parcel-zones",
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: { parcelZone }
    });
  }

  return { 
    all,
    create
  };
}

module.exports = parcelZonesFactory;
