const { authorizationHeaders } = require("./../endpoints_helpers");

function amenityGroupsFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client.get("/amenity-groups", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function get({ token, amenityGroupId, query = {} }) {
    return client.get(`/amenity-groups/${amenityGroupId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ token, jwtToken, amenityGroup }) {
    return client({
      url: "/amenity-groups",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { amenityGroup }
    });
  }

  function update({ token, jwtToken, amenityGroupId, amenityGroup }) {
    return client({
      url: `/amenity-groups/${amenityGroupId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
