const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function manifestNotificationsFactory({
  client,
  internalAuthTokenProvider
}) {
  function create({
    token, jwtToken, query = {}, data
  }) {
    return client({
      url: "/manifest-notifications",
      method: "post",
      params: query,
      data,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function all({
    token,
    query = {}
  }) {
    return client.get("/manifest-notifications", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider
      })
    });
  }

  return {
    create,
    all
  };
}

module.exports = manifestNotificationsFactory;
