const { authorizationHeaders } = require("./../endpoints_helpers");

function cartPromoFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, cartId, query = {}, headers }) {
    return client({ 
      url: `/cart/${cartId}/promos`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function remove({ token, jwtToken, cartId, query = {}, headers }) {
    return client({
      url: `/cart/${cartId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return { 
    create,
    remove
  };
}

module.exports = cartPromoFactory;