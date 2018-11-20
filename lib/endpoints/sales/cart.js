"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function cartFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        id = _ref2.id,
        providerId = _ref2.providerId;

    var url = "/cart/" + id;

    if (providerId) {
      url = url + "?providerId=" + providerId;
    }

    return client({
      url: url,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        cart = _ref3.cart,
        jwtToken = _ref3.jwtToken;

    return client({
      url: "/cart",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: cart
    });
  }

  function add(_ref4) {
    var token = _ref4.token,
        cartId = _ref4.cartId,
        cart = _ref4.cart,
        jwtToken = _ref4.jwtToken;

    return client({
      url: "/cart/" + cartId + "/items",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: cart
    });
  }

  function deleteItems(_ref5) {
    var token = _ref5.token,
        cartId = _ref5.cartId,
        params = _ref5.params,
        jwtToken = _ref5.jwtToken;

    return client({
      url: "/cart/" + cartId + "/items",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: params
    });
  }

  var loyaltyPointsAmount = {
    get: function get(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          cartId = _ref6.cartId,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query;

      return client({
        url: "/carts/" + cartId + "/loyalty-points-amount",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
      });
    }
  };

  return {
    get: get,
    create: create,
    add: add,
    deleteItems: deleteItems,
    loyaltyPointsAmount: loyaltyPointsAmount
  };
}

module.exports = cartFactory;