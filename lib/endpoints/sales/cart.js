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

  function deletePaidInItem(_ref6) {
    var token = _ref6.token,
        cartId = _ref6.cartId,
        itemId = _ref6.itemId,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/carts/" + cartId + "/paid-in-items/" + itemId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function deletePaidInItems(_ref7) {
    var token = _ref7.token,
        cartId = _ref7.cartId,
        jwtToken = _ref7.jwtToken,
        headers = _ref7.headers;

    return client({
      url: "/carts/" + cartId + "/paid-in-items",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  var loyaltyPointsAmount = {
    get: function get(_ref8) {
      var token = _ref8.token,
          jwtToken = _ref8.jwtToken,
          cartId = _ref8.cartId,
          _ref8$query = _ref8.query,
          query = _ref8$query === undefined ? {} : _ref8$query,
          headers = _ref8.headers;

      return client({
        url: "/carts/" + cartId + "/loyalty-points-amount",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  function patch(_ref9) {
    var token = _ref9.token,
        jwtToken = _ref9.jwtToken,
        cartId = _ref9.cartId,
        data = _ref9.data,
        headers = _ref9.headers;

    return client({
      url: "/cart/" + cartId,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  var partialDepositStatus = {
    get: function get(_ref10) {
      var token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          shiftId = _ref10.shiftId,
          headers = _ref10.headers;

      return client.get("/cart/" + shiftId + "/partial-deposit-status", {
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var payments = {
    delete: function _delete(_ref11) {
      var token = _ref11.token,
          cartId = _ref11.cartId,
          jwtToken = _ref11.jwtToken,
          headers = _ref11.headers;

      return client({
        url: "/carts/" + cartId + "/payments",
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    put: function put(_ref12) {
      var token = _ref12.token,
          cartId = _ref12.cartId,
          jwtToken = _ref12.jwtToken,
          headers = _ref12.headers,
          payment = _ref12.payment;

      return client({
        url: "/carts/" + cartId + "/payments",
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: payment
      });
    }
  };

  var taxExemptPaymentMethod = {
    post: function post(_ref13) {
      var token = _ref13.token,
          cartId = _ref13.cartId,
          jwtToken = _ref13.jwtToken,
          headers = _ref13.headers,
          _ref13$data = _ref13.data,
          data = _ref13$data === undefined ? {} : _ref13$data;

      return client({
        url: "/carts/" + cartId + "/tax-exempt-payment-method",
        method: "POST",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  var financingCosts = {
    create: function create(_ref14) {
      var token = _ref14.token,
          jwtToken = _ref14.jwtToken,
          headers = _ref14.headers,
          cartId = _ref14.cartId,
          financingCost = _ref14.financingCost,
          _ref14$query = _ref14.query,
          query = _ref14$query === undefined ? {} : _ref14$query;

      return client({
        url: "/carts/" + cartId + "/financing-costs",
        method: "POST",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: {
          financingcost: financingCost
        }
      });
    },
    delete: function _delete(_ref15) {
      var token = _ref15.token,
          jwtToken = _ref15.jwtToken,
          headers = _ref15.headers,
          cartId = _ref15.cartId,
          _ref15$query = _ref15.query,
          query = _ref15$query === undefined ? {} : _ref15$query;

      return client({
        url: "/carts/" + cartId + "/financing-costs",
        method: "delete",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    get: get,
    create: create,
    add: add,
    deleteItems: deleteItems,
    deletePaidInItem: deletePaidInItem,
    deletePaidInItems: deletePaidInItems,
    loyaltyPointsAmount: loyaltyPointsAmount,
    patch: patch,
    partialDepositStatus: partialDepositStatus,
    payments: payments,
    taxExemptPaymentMethod: taxExemptPaymentMethod,
    financingCosts: financingCosts
  };
}

module.exports = cartFactory;