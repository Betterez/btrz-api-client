const { authorizationHeaders } = require("./../endpoints_helpers");

function amenitiesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {}, headers }) {
    return client.get("/amenities", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({ token, amenityId, query = {}, headers }) {
    return client.get(`/amenities/${amenityId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, jwtToken, amenity, headers }) {
    return client({
      url: "/amenities",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { amenity }
    });
  }

  function update({ token, jwtToken, amenityId, amenity, headers }) {
    return client({
      url: `/amenities/${amenityId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { amenity }
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = amenitiesFactory;
