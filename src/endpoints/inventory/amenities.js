const { authorizationHeaders } = require("./../endpoints_helpers");

function amenitiesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client.get("/amenities", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function get({ token, amenityId, query = {} }) {
    return client.get(`/amenities/${amenityId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ token, jwtToken, amenity }) {
    return client({
      url: "/amenities",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { amenity }
    });
  }

  function update({ token, jwtToken, amenityId, amenity }) {
    return client({
      url: `/amenities/${amenityId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
