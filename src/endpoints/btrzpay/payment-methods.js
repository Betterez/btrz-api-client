const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentMethodsFactory({ client, internalAuthTokenProvider }) {

  function getByProviderName({ token, jwtToken, providerName }) { //deprecated
    return client({
      url: `/payment-methods?providerName=${providerName}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({ token, jwtToken, paymentMethod }) {
    return client({
      url: "/payment-methods",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { paymentMethod }
    });
  }

  function get({ token, jwtToken, paymentMethodId }) {
    return client.get(`/payment-methods/${paymentMethodId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function update({ token, jwtToken, paymentMethodId, paymentMethod }) {
    return client({
      url: `/payment-methods/${paymentMethodId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { paymentMethod }
    });
  }

  return {
    getByProviderName,
    create,
    get,
    update
  };
}

module.exports = paymentMethodsFactory;
