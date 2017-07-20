const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelFactory({ client }) {

  function get({ token, jwtToken, id }) {
    return client({
      url: `/parcel/${id}`,
      headers: authorizationHeaders({ token , jwtToken })
    });
  }

  function update({ token, jwtToken, id, parcel, locationData }) {
    return client({
      url: `/parcel/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken}),
      data: { parcel, locationData }
    });
  }

  return { 
    get,
    update
  };
}

module.exports = parcelFactory;
