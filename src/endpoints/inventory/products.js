const {authorizationHeaders} = require("./../endpoints_helpers");

function productsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}}) {
    return client({
      url: "/products",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function get({productId, token, jwtToken, query = {}}) {
    return client({
      url: `/products/${productId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken})
    });
  }

  return {
    all,
    get
  };
}

module.exports = productsFactory;
