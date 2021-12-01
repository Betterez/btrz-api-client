const {authorizationHeaders} = require("../endpoints_helpers");
function customersFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, paymentMethodId, customerId, headers}) {
    return client.get(`/payment-methods/${paymentMethodId}/customers/${customerId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, paymentMethodId, customer, headers}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {customer}
    });
  }

  function remove({token, jwtToken, paymentMethodId, customerId, headers}) {
    return client({
      url: `/payment-methods/${paymentMethodId}/customers/${customerId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    remove,
    create,
    get
  };
}

module.exports = customersFactory;
