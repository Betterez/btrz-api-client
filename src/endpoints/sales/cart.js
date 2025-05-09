const {authorizationHeaders} = require("./../endpoints_helpers.js");

function cartFactory({client, internalAuthTokenProvider}) {
  function get({token, id, providerId, headers}) {
    let url = `/cart/${id}`;

    if (providerId) {
      url = `${url}?providerId=${providerId}`;
    }

    return client({
      url,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({token, cart, jwtToken, headers}) {
    return client({
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  function add({token, cartId, cart, jwtToken, headers}) {
    return client({
      url: `/cart/${cartId}/items`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: cart
    });
  }

  function deleteItems({token, cartId, params, jwtToken, headers}) {
    return client({
      url: `/cart/${cartId}/items`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params
    });
  }

  const loyaltyPointsAmount = {
    get({token, jwtToken, cartId, query = {}, headers}) {
      return client({
        url: `/carts/${cartId}/loyalty-points-amount`,
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };


  function patch({token, jwtToken, cartId, data, headers}) {
    return client({
      url: `/cart/${cartId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  const partialDepositStatus = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/cart/${shiftId}/partial-deposit-status`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const payments = {
    delete({token, cartId, jwtToken, headers}) {
      return client({
        url: `/carts/${cartId}/payments`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    put({token, cartId, jwtToken, headers, payment}) {
      return client({
        url: `/carts/${cartId}/payments`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: payment
      });
    }
  };

  const taxExemptPaymentMethod = {
    post({token, cartId, jwtToken, headers, data = {}}) {
      return client({
        url: `/carts/${cartId}/tax-exempt-payment-method`,
        method: "POST",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  const financingCosts = {
    create({token, jwtToken, headers, cartId, financingCost, query = {}}) {
      return client({
        url: `/carts/${cartId}/financing-costs`,
        method: "POST",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          financingcost: financingCost
        }
      });
    },
    delete({token, jwtToken, headers, cartId, query = {}}) {
      return client({
        url: `/carts/${cartId}/financing-costs`,
        method: "delete",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    get,
    create,
    add,
    deleteItems,
    loyaltyPointsAmount,
    patch,
    partialDepositStatus,
    payments,
    taxExemptPaymentMethod,
    financingCosts
  };
}

module.exports = cartFactory;
