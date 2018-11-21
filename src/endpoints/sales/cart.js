const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function cartFactory({ client, internalAuthTokenProvider }) {

  function get({ token, id, providerId }) {
    let url = `/cart/${id}`;

    if(providerId) {
      url = `${url}?providerId=${providerId}`;
    }

    return client({
      url,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ token, cart, jwtToken }) {
    return client({ 
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: cart
    });
  }

  function add({ token, cartId, cart, jwtToken }) {
    return client({ 
      url: `/cart/${cartId}/items`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: cart
    });
  }

  function deleteItems({ token, cartId, params, jwtToken }) {
    return client({ 
      url: `/cart/${cartId}/items`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      params
    });
  }

  const loyaltyPointsAmount = {
    get({ token, jwtToken, cartId, query = {} }) {
      return client({
        url: `/carts/${cartId}/loyalty-points-amount`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
      });
    }
  };


  function patch({ token, jwtToken, cartId, data }) {
    return client({
      url: `/cart/${cartId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  return {
    get,
    create,
    add,
    deleteItems,
    loyaltyPointsAmount,
    patch
  };
}

module.exports = cartFactory;
