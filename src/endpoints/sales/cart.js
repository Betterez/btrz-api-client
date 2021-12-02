const { authorizationHeaders } = require("./../endpoints_helpers");

function cartFactory({ client, internalAuthTokenProvider }) {

  function get({ token, id, providerId, headers }) {
    let url = `/cart/${id}`;

    if(providerId) {
      url = `${url}?providerId=${providerId}`;
    }

    return client({
      url,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, cart, jwtToken, headers }) {
    return client({ 
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  function add({ token, cartId, cart, jwtToken, headers }) {
    return client({ 
      url: `/cart/${cartId}/items`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  function deleteItems({ token, cartId, params, jwtToken, headers }) {
    return client({ 
      url: `/cart/${cartId}/items`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  const loyaltyPointsAmount = {
    get({ token, jwtToken, cartId, query = {}, headers }) {
      return client({
        url: `/carts/${cartId}/loyalty-points-amount`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };


  function patch({ token, jwtToken, cartId, data, headers }) {
    return client({
      url: `/cart/${cartId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
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
