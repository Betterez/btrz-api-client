const { authorizationHeaders } = require("./../endpoints_helpers");

function fareClassesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/fare-classes",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  function create({ token, jwtToken, fareClass }) {
    return client({
      url: "/fare-classes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { fareClass }
    });
  }

  function update({ token, jwtToken, fareClassId, update }) {
    return client({
      url: `/fare-classes/${fareClassId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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
