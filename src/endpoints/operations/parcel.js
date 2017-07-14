const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelFactory({ client }) {

  function get({ token, jwtToken, id }) {
    return client({
      url: `/parcel/${id}`,
      headers: authorizationHeaders({ token , jwtToken })
    });
  }

  return { 
    get
  };
}

module.exports = parcelFactory;
