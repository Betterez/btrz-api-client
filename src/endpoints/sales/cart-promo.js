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

  return { 
    create
  };
}

module.exports = cartPromoFactory;