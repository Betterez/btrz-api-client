const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function manifestNotificationsFactory({
  client,
  internalAuthTokenProvider
}) {
  function create({
    token, jwtToken, query = {}, data, headers
  }) {
    return client({
      url: "/manifest-notifications",
      method: "post",
      params: query,
      data,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({
    token,
    query = {},
    headers
  }) {
    return client.get("/manifest-notifications", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    create,
    all
  };
}

module.exports = manifestNotificationsFactory;
