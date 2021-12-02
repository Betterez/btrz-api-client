const { authorizationHeaders } = require("./../endpoints_helpers");

function bundlesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {}, headers }) {
    return client({
      url: "/bundles",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function get({token, jwtToken, bundleId, headers}) {
    return client({
      url: `/bundles/${bundleId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = bundlesFactory;