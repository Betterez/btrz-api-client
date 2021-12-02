"use strict";

var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function customerCardsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        paymentMethodId = _ref2.paymentMethodId,
        customerId = _ref2.customerId,
        customerCardId = _ref2.customerCardId,
        headers = _ref2.headers;

    return client.get("/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards/" + customerCardId, {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        paymentMethodId = _ref3.paymentMethodId,
        customerId = _ref3.customerId,
        headers = _ref3.headers;

    return client.get("/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards", {
      params: {},
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        paymentMethodId = _ref4.paymentMethodId,
        customerId = _ref4.customerId,
        customerCard = _ref4.customerCard,
        headers = _ref4.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { customerCard: customerCard }
    });
  }

  function remove(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        paymentMethodId = _ref5.paymentMethodId,
        customerId = _ref5.customerId,
        customerCardId = _ref5.customerCardId,
        headers = _ref5.headers;

    return client({
      url: "/payment-methods/" + paymentMethodId + "/customers/" + customerId + "/cards/" + customerCardId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    remove: remove,
    create: create,
    get: get,
    all: all
  };
}

module.exports = customerCardsFactory;