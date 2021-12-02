"use strict";

var _require = require("./../endpoints_helpers"),
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

  return {
    get: get,
    create: create,
    add: add,
    deleteItems: deleteItems,
    loyaltyPointsAmount: loyaltyPointsAmount,
    patch: patch
  };
}

module.exports = cartFactory;