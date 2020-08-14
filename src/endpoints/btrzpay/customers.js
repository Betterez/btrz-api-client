const {authorizationHeaders} = require("../endpoints_helpers");
function customersFactory({client, internalAuthTokenProvider}) {

  function get({token, jwtToken, paymentMethodId, customerId}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({token, jwtToken, paymentMethodId, customer}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: {customer}
    });
  }

  function remove({token, jwtToken, paymentMethodId, customerId}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    remove,
    create,
    get
  };
}

module.exports = customersFactory;
