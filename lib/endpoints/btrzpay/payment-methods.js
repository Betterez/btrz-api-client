"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function paymentMethodsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/payment-methods", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function getByProviderName(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        providerName = _ref3.providerName;
    //deprecated
    return client({
      url: "/payment-methods?providerName=" + providerName,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        paymentMethod = _ref4.paymentMethod;

    return client({
      url: "/payment-methods",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { paymentMethod: paymentMethod }
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

  function setToAgency(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        agencyId = _ref7.agencyId,
        providerId = _ref7.providerId,
        paymentMethodNames = _ref7.paymentMethodNames;

    return client({
      url: "/payment-methods-to-agencies",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { providerId: providerId, agencyId: agencyId, paymentMethodNames: paymentMethodNames }
    });
  }

  return {
    all: all,
    getByProviderName: getByProviderName,
    create: create,
    get: get,
    setToAgency: setToAgency,
    update: update
  };
}

module.exports = paymentMethodsFactory;