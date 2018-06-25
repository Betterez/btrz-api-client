const { authorizationHeaders } = require("./../endpoints_helpers");

function bundlesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, query = {} }) {
    return client.get(`/bundles`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all
  };
}

module.exports = bundlesFactory;
