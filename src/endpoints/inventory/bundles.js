const { authorizationHeaders } = require("./../endpoints_helpers");

function bundlesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/bundles",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  function get({token, jwtToken, bundleId}) {
    return client({
      url: `/bundles/${bundleId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken})
    });
  }

  return {
    all,
    get
  };
}

module.exports = bundlesFactory;