const { authorizationHeaders } = require("./../endpoints_helpers");

function filteredTripsFactory({ client, internalAuthTokenProvider }) {
  
  function create({ token, jwtToken, tripSegmentsId, headers }) {
    return client({ 
      url: "/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { tripSegmentsId }
    });
  }

  return { 
    create
  };
}

module.exports = filteredTripsFactory;