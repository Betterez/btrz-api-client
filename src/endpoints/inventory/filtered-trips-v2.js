const {authorizationHeaders} = require("./../endpoints_helpers");

function filteredTripsV2Factory({client, internalAuthTokenProvider}) {

  function create({token, jwtToken, filteredTrip}) {
    return client({
      url: "/v2/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {filteredTrip}
    });
  }

  return {
    create
  };
}

module.exports = filteredTripsV2Factory;
