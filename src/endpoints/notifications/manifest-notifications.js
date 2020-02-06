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

  return {
    create
  };
}

module.exports = manifestNotificationsFactory;
