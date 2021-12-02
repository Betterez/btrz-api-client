const { authorizationHeaders } = require("./../endpoints_helpers");

function bundleFaresFactory({client, internalAuthTokenProvider}) {

  function all({ token, bundleId, productId, query = {}, headers }) {
    return client.get(`/bundle/${bundleId}/product/${productId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all
  };

}

module.exports = bundleFaresFactory;
