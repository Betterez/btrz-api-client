const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentMethodsFactory({ client, internalAuthTokenProvider }) {
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/payment-methods", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function getByProviderName({ token, jwtToken, providerName, headers }) { //deprecated
    return client({
      url: `/payment-methods?providerName=${providerName}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, jwtToken, paymentMethod, headers }) {
    return client({
      url: "/payment-methods",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { paymentMethod }
    });
  }

  function get({ token, jwtToken, paymentMethodId, headers }) {
    return client.get(`/payment-methods/${paymentMethodId}`, {
      params: {},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({ token, jwtToken, paymentMethodId, paymentMethod, headers }) {
    return client({
      url: `/payment-methods/${paymentMethodId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { paymentMethod }
    });
  }

  function setToAgency({token, jwtToken, agencyId, providerId, paymentMethodNames, headers}) {
    return client({
      url: "/payment-methods-to-agencies",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {providerId, agencyId, paymentMethodNames}
    });
  }

  return {
    all,
    getByProviderName,
    create,
    get,
    setToAgency,
    update
  };
}

module.exports = paymentMethodsFactory;
