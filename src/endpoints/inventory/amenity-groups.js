const { authorizationHeaders } = require("./../endpoints_helpers");

function amenityGroupsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {} }) {
    return client.get("/amenity-groups", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({ token, amenityGroupId, query = {} }) {
    return client.get(`/amenity-groups/${amenityGroupId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ token, jwtToken, amenity }) {
    return client({
      url: "/amenity-groups",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { amenity }
    });
  }

  function update({ token, jwtToken, amenityId, amenity }) {
    return client({
      url: `/amenity-groups/${amenityId}`,
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

module.exports = amenityGroupsFactory;
