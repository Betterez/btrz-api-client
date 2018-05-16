"use strict";

var url = require("url");

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function cartPromoFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        cartId = _ref2.cartId,
        promoCode = _ref2.promoCode,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client({
      url: "/cart/" + cartId + "/promo/" + promoCode,
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  function remove(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        cartId = _ref3.cartId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client({
      url: "/cart/" + cartId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      params: query
    });
  }

  return {
    create: create,
    remove: remove
  };
}

module.exports = cartPromoFactory;