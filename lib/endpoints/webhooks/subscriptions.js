"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function subscriptionsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        context = _ref2.context,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "/subscriptions",
      params: queryObj,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function getById(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        headers = _ref3.headers;

    return client({
      url: "/subscriptions/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        subscription = _ref4.subscription,
        headers = _ref4.headers;

    return client({
      url: "/subscriptions",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: subscription
    });
  }

  function put(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        subscription = _ref5.subscription,
        headers = _ref5.headers;

    return client({
      url: "/subscriptions/" + id,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: subscription
    });
  }

  function deleteById(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        id = _ref6.id,
        headers = _ref6.headers;

    return client({
      url: "/subscriptions/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    create: create,
    getById: getById,
    put: put,
    deleteById: deleteById
  };
}

module.exports = subscriptionsFactory;