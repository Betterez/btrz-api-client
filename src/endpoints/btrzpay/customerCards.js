const {authorizationHeaders} = require("../endpoints_helpers");
function customerCardsFactory({client, internalAuthTokenProvider}) {

  function get({token, jwtToken, paymentMethodId, customerId, customerCardId}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function all({token, jwtToken, paymentMethodId, customerId}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}/cards`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({token, jwtToken, paymentMethodId, customerId, customerCard}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}/cards`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {customerCard}
    });
  }

  function remove({token, jwtToken, paymentMethodId, customerId, customerCardId}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}/cards/${customerCardId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
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
