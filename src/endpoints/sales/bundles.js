const { authorizationHeaders } = require("./../endpoints_helpers");

function bundlesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {}, headers }) {
    return client.get(`/bundles`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };
}

module.exports = bundlesFactory;
