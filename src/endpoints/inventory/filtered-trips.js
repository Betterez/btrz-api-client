const { authorizationHeaders } = require("./../endpoints_helpers");

function filteredTripsFactory({ client }) {
  
  function create({ token, jwtToken, tripSegmentsId }) {
    return client({ 
      url: "/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: { tripSegmentsId }
    });
  }

  return { 
    create
  };
}

module.exports = filteredTripsFactory;