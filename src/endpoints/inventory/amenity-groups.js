const { authorizationHeaders } = require("./../endpoints_helpers");

function amenityGroupsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {}, headers }) {
    return client.get("/amenity-groups", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({ token, amenityGroupId, query = {}, headers }) {
    return client.get(`/amenity-groups/${amenityGroupId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, jwtToken, amenityGroup, headers }) {
    return client({
      url: "/amenity-groups",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { amenityGroup }
    });
  }

  function update({ token, jwtToken, amenityGroupId, amenityGroup, headers }) {
    return client({
      url: `/amenity-groups/${amenityGroupId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { amenityGroup }
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
