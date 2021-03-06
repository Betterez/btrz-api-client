"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function undeliveredFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        context = _ref2.context,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "/undelivered",
      params: queryObj,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function getById(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id;

    return client({
      url: "/undelivered/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function patch(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        operation = _ref4.operation;

    return client({
      url: "/undelivered",
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: operation
    });
  }

  function resend(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id;

    return client({
      url: "/undelivered/" + id + "/retry",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function resendAll(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken;

    return client({
      url: "/undelivered/retry-all",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    all: all,
    getById: getById,
    patch: patch,
    resend: resend,
    resendAll: resendAll
  };
}

module.exports = undeliveredFactory;