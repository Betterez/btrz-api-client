const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function parcelFactory({ client }) {

  function get({ token, jwtToken, id }) {
    return client({
      url: `/parcels/${id}`,
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

  function addScan({ token, jwtToken, id, operationType, locationData }) {
    return client({
      url: `/parcels/${id}/scans`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: { operationType, locationData }
    });
  }

  return { 
    get,
    all,
    addScan
  };
}

module.exports = parcelFactory;
