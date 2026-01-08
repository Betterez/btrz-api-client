const { authorizationHeaders } = require("./../endpoints_helpers");

function tripManifestsFactory({ client, internalAuthTokenProvider }) {
  function all({token, jwtToken, query = {}, headers }) {
    return client({
      url: "/trip-manifests",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = tripManifestsFactory;
