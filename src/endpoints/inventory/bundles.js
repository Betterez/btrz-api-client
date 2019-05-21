const { authorizationHeaders } = require("./../endpoints_helpers");

function bundlesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/bundles",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  return {
    all,
  };
}

module.exports = bundlesFactory;