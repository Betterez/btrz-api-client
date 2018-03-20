const { authorizationHeaders } = require("./../endpoints_helpers");

function fareClassesFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, fareClass }) {
    return client({
      url: "/fare-classes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { fareClass }
    });
  }

  return {
    create,
  };
}

module.exports = fareClassesFactory;
