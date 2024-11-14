"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function cartFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        id = _ref2.id,
        providerId = _ref2.providerId,
        headers = _ref2.headers;

    var url = "/cart/" + id;

    if (providerId) {
      url = url + "?providerId=" + providerId;
    }

    return client({
      url: url,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        cart = _ref3.cart,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client({
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: cart
    });
  }

  function add(_ref4) {
    var token = _ref4.token,
        cartId = _ref4.cartId,
        cart = _ref4.cart,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/cart/" + cartId + "/items",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: cart
    });
  }

  function deleteItems(_ref5) {
    var token = _ref5.token,
        cartId = _ref5.cartId,
        params = _ref5.params,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/cart/" + cartId + "/items",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: params
    });
  }

  var loyaltyPointsAmount = {
    get: function get(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          cartId = _ref6.cartId,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query,
          headers = _ref6.headers;

      return client({
        url: "/carts/" + cartId + "/loyalty-points-amount",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  function patch(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        cartId = _ref7.cartId,
        data = _ref7.data,
        headers = _ref7.headers;

    return client({
      url: "/cart/" + cartId,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  var partialDepositStatus = {
    get: function get(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          shiftId = _ref8.shiftId,
          headers = _ref8.headers;

      return client.get("/cart/" + shiftId + "/partial-deposit-status", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var payments = {
    delete: function _delete(_ref9) {
      var token = _ref9.token,
          cartId = _ref9.cartId,
          jwtToken = _ref9.jwtToken,
          headers = _ref9.headers;

      return client({
        url: "/carts/" + cartId + "/payments",
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    put: function put(_ref10) {
      var token = _ref10.token,
          cartId = _ref10.cartId,
          jwtToken = _ref10.jwtToken,
          headers = _ref10.headers,
          payment = _ref10.payment;

      return client({
        url: "/carts/" + cartId + "/payments",
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: payment
      });
    }
  };

  var taxExemptPaymentMethod = {
    post: function post(_ref11) {
      var token = _ref11.token,
          cartId = _ref11.cartId,
          jwtToken = _ref11.jwtToken,
          headers = _ref11.headers,
          _ref11$data = _ref11.data,
          data = _ref11$data === undefined ? {} : _ref11$data;

      return client({
        url: "/carts/" + cartId + "/tax-exempt-payment-method",
        method: "POST",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    get: get,
    create: create,
    add: add,
    deleteItems: deleteItems,
    loyaltyPointsAmount: loyaltyPointsAmount,
    patch: patch,
    partialDepositStatus: partialDepositStatus,
    payments: payments,
    taxExemptPaymentMethod: taxExemptPaymentMethod
  };
}

module.exports = cartFactory;