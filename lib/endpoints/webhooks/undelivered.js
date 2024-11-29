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
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    var queryObj = Object.assign({}, query, { context: context });

    return client({
      url: "/undelivered",
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
      url: "/undelivered/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function patch(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        operation = _ref4.operation,
        headers = _ref4.headers;

    return client({
      url: "/undelivered",
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: operation
    });
  }

  function resend(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        id = _ref5.id,
        headers = _ref5.headers;

    return client({
      url: "/undelivered/" + id + "/retry",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function resendAll(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/undelivered/retry-all",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function deleteById(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        id = _ref7.id,
        headers = _ref7.headers;

    return client({
      url: "/undelivered/" + id,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function deleteAll(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        headers = _ref8.headers;

    return client({
      url: "/undelivered/batch-all",
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    all: all,
    getById: getById,
    patch: patch,
    resend: resend,
    resendAll: resendAll,
    deleteById: deleteById,
    deleteAll: deleteAll
  };
}

module.exports = undeliveredFactory;