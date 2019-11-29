"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function paymentMethodsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function getByProviderName(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        providerName = _ref2.providerName;
    //deprecated
    return client({
      url: "/payment-methods?providerName=" + providerName,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        paymentMethod = _ref3.paymentMethod;

    return client({
      url: "/payment-methods",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { paymentMethod: paymentMethod }
    });
  }

  function remove(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        paymentMethodId = _ref4.paymentMethodId;

    return client({
      url: "/payment-methods/" + paymentMethodId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function get(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        paymentMethodId = _ref5.paymentMethodId;

    return client.get("/payment-methods/" + paymentMethodId, {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        paymentMethodId = _ref6.paymentMethodId,
        paymentMethod = _ref6.paymentMethod;

    return client({
      url: "/payment-methods/" + paymentMethodId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { paymentMethod: paymentMethod }
    });
  }

  return {
    getByProviderName: getByProviderName,
    create: create,
    remove: remove,
    get: get,
    update: update
  };
}

module.exports = paymentMethodsFactory;