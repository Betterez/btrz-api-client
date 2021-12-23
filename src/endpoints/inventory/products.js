const {authorizationHeaders} = require("./../endpoints_helpers");

function productsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client({
      url: "/products",
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({productId, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/products/${productId}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers})
    });
  }

  const domains = {
    remove: ({token, jwtToken, domain, headers}) =>{
      return client({
        url: `/products/domains/${domain}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const families = {
    all: ({token, query = {}, headers}) => {
      return client({
        url: "/products/families",
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    get,
    families,
    domains
  };
}

module.exports = productsFactory;
