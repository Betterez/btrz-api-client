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

  return {
    all,
    create,
  };
}

module.exports = fareClassesFactory;
