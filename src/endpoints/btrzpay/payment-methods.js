const { authorizationHeaders } = require("./../endpoints_helpers");

function paymentMethodsFactory({ client, internalAuthTokenProvider }) {

  function getByProviderName({ token, jwtToken, providerName }) { //deprecated
    return client({
      url: `/payment-methods?providerName=${providerName}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    getByProviderName
  };
}

module.exports = paymentMethodsFactory;
