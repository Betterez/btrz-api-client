const {authorizationHeaders} = require("../endpoints_helpers");
function customerCardsFactory({client, internalAuthTokenProvider}) {

  function get({token, jwtToken, paymentMethodId, customerId, customerCardId, headers}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function all({token, jwtToken, paymentMethodId, customerId, headers}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, paymentMethodId, customerId, customerCard, headers}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}/cards`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {customerCard}
    });
  }

  function remove({token, jwtToken, paymentMethodId, customerId, customerCardId, headers}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    remove,
    create,
    get,
    all
  };
}

module.exports = customerCardsFactory;
