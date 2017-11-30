const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelFactory({ client }) {

  function get({ token, jwtToken, id }) {
    return client({
      url: `/parcel/${id}`,
      headers: authorizationHeaders({ token , jwtToken })
    });
  }

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/parcels",
      params: query,
      headers: authorizationHeaders({token, jwtToken})
    });
  }

  function update({ token, jwtToken, id, locationData, operationType }) {
    return client({
      url: `/parcel/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken}),
      data: { operationType, locationData }
    });
  }

  return { 
    get,
    all,
    update
  };
}

module.exports = parcelFactory;
