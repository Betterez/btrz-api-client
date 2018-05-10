const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function cartPromoFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, cartId, promoCode, query = {} }) {
    return client({ 
      url: `/cart/${cartId}/promo/${promoCode}`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  function remove({ token, jwtToken, cartId, query = {} }) {
    return client({
      url: `/cart/${cartId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params: query
    });
  }

  return { 
    create,
    remove
  };
}

module.exports = cartPromoFactory;