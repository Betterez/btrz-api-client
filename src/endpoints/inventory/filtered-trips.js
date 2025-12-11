const {authorizationHeaders} = require("./../endpoints_helpers.js");

function filteredTripsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/filtered-trips", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, tripSegmentsId, headers}) {
    return client({
      url: "/filtered-trips",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tripSegmentsId}
    });
  }

  return {
    all,
    create
  };
}

module.exports = filteredTripsFactory;
