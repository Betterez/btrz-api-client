const { authorizationHeaders } = require("./../endpoints_helpers");

function fareClassesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {}, headers }) {
    return client({
      url: "/fare-classes",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function create({ token, jwtToken, fareClass, headers }) {
    return client({
      url: "/fare-classes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { fareClass }
    });
  }

  function update({ token, jwtToken, fareClassId, update, headers }) {
    return client({
      url: `/fare-classes/${fareClassId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { update }
    });
  }

  return {
    all,
    create,
    update
  };
}

module.exports = fareClassesFactory;
