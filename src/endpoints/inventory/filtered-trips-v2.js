const {authorizationHeaders} = require("./../endpoints_helpers");

function filteredTripsV2Factory({client, internalAuthTokenProvider}) {

  function create({token, jwtToken, filteredTrip, headers}) {
    return client({
      url: "/v2/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {filteredTrip}
    });
  }

  return {
    create
  };
}

module.exports = filteredTripsV2Factory;
