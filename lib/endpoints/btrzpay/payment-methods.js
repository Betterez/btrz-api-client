"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function paymentMethodsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/payment-methods", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getByProviderName(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        providerName = _ref3.providerName,
        headers = _ref3.headers;
    //deprecated
    return client({
      url: "/payment-methods?providerName=" + providerName,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        paymentMethod = _ref4.paymentMethod,
        headers = _ref4.headers;

    return client({
      url: "/payment-methods",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { paymentMethod: paymentMethod }
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        paymentMethodId = _ref5.paymentMethodId,
        headers = _ref5.headers;

    return client.get("/payment-methods/" + paymentMethodId, {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        paymentMethodId = _ref6.paymentMethodId,
        paymentMethod = _ref6.paymentMethod,
        headers = _ref6.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { paymentMethod: paymentMethod }
    });
  }

  function setToAgency(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        agencyId = _ref7.agencyId,
        providerId = _ref7.providerId,
        paymentMethodNames = _ref7.paymentMethodNames,
        headers = _ref7.headers;

    return client({
      url: "/payment-methods-to-agencies",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { providerId: providerId, agencyId: agencyId, paymentMethodNames: paymentMethodNames }
    });
  }

  function createDefaultPaymentMethods(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        accountId = _ref8.accountId;

    return client({
      url: "/default-payment-methods",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { accountId: accountId }
    });
  }

  function deleteCustomersCreditCardInfo(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        paymentMethodId = _ref9.paymentMethodId;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    all: all,
    getByProviderName: getByProviderName,
    create: create,
    get: get,
    setToAgency: setToAgency,
    update: update,
    createDefaultPaymentMethods: createDefaultPaymentMethods,
    deleteCustomersCreditCardInfo: deleteCustomersCreditCardInfo
  };
}

module.exports = paymentMethodsFactory;