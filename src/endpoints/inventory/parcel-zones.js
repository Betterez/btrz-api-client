const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelZonesFactory({ client }) {
  
  function all({ token }) {
    return client("/parcel-zones", {
      headers: authorizationHeaders({token})
    });
  }

  return { 
    all
  };
}

module.exports = parcelZonesFactory;
